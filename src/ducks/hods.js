import {makeTypes, createReducer, asyncMac, mac} from 'ducks-maker'

export const crudHOD = m => {
    const t = makeTypes(m);

    const FETCH = t('fetch').async();
    const ADD = t('add').async();
    const DEL = t('del').async();

    const fetchActions = asyncMac(FETCH);
    const addActions = asyncMac(ADD);
    const delActions = asyncMac(DEL);
    const deleteStart = mac(DEL.START, 'payload');

    const initialState = {
        data: [],
        error: null,
        fetching: false,
        adding: false,
        deleting: false,
    };

    const reducer = createReducer(initialState, {
        [FETCH.START]: state => ({...state, fetching: true}),
        [FETCH.SUCCESS]: (state, {payload}) => ({...state, fetching: false, data: payload}),
        [FETCH.ERROR]: (state, {error}) => ({...state, fetching: false, error}),
        [ADD.START]: state => ({...state, adding: true}),
        [ADD.SUCCESS]: (state, {payload}) =>
            ({...state, adding: false, data: state.data.concat(payload)}),
        [ADD.ERROR]: (state, {error}) => ({...state, adding: false, error}),
        [DEL.START]: (state, {payload}) => ({
            ...state, data: state.data.map(x => ({
                ...x,
                deleting: x.id === payload,
            }))
        }),
        [DEL.SUCCESS]: (state, {payload}) => ({
            ...state,
            deleting: false,
            data: state.data.filter(x => payload !== x.id)
        }),
        [DEL.ERROR]: (state, {error}) => ({...state, deleting: false, error})
    });

    const fetch = url => () =>
        async (dispatch, getState, {axios}) => {
            dispatch(fetchActions.start());
            try {
                const {data} = await axios.get(url);
                dispatch(fetchActions.success(data));
            } catch (e) {
                dispatch(fetchActions.error(e));
            }
        };

    const add = url => payload =>
        async (dispatch, getState, {axios}) => {
            dispatch(addActions.start());
            try {
                const {data} = await axios.post(url, payload);
                dispatch(addActions.success({...data, userId: 1}));
            } catch (e) {
                dispatch(addActions.error(e));
            }
        };

    const del = url => id =>
        async (dispatch, getState, {axios}) => {
            dispatch(deleteStart(id));
            try {
                await axios.delete(`${url}/${id}`);
                dispatch(delActions.success(id));
            } catch (e) {
                dispatch(delActions.error(e));
            }
        };

    return {
        default: reducer,
        fetch,
        add,
        del
    }
};