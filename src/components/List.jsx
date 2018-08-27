import React from 'react'
import {ListGroup, Button} from 'react-bootstrap';

export const CustomLi = ({children}) =>
    <li className="list-group-item">
        {children}
    </li>;

export default class List extends React.Component {
    handleDelete = id => () => {
        const {handleDelete} = this.props;
        handleDelete(id);
    };

    render() {
        const {data, deletable} = this.props;
        return (
            <ListGroup componentClass="ul">
                <div className='panel panel-primary'>
                    <div className='panel-heading'>POSTS</div>
                    {data.map(item =>
                        <CustomLi key={item.id}>
                            {item.text} {deletable && <Button bsStyle="danger" disabled={item.deleting}
                                                              onClick={this.handleDelete(item.id)}>{item.deleting ? 'Eliminando...' : 'Eliminar'}</Button>}
                        </CustomLi>)}
                </div>
            </ListGroup>
        )
    }
}