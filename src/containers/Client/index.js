import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import List from '../../components/List'
import Loading from '../../components/Loading'
import {bindActionCreators} from 'redux'
import * as postsActions from '../../ducks/Posts'
import {postsWithUsers} from '../mstp'
import {Grid, PageHeader} from 'react-bootstrap';

const Client = ({data, fetching}) =>
    <Grid>
        <PageHeader>
            <div className='clearfix'>Mini Blog</div>
            <Link className='btn btn-primary' to='/admin'>Administrador</Link>
        </PageHeader>
        {!fetching ? <List data={data}/> : <Loading/>}
    </Grid>;


const mapDispatchToProps = dispatch => bindActionCreators({
    ...postsActions
}, dispatch);

export default connect(
    postsWithUsers,
    mapDispatchToProps,
)(Client)