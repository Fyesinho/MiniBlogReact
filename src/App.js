import React, {Component} from 'react';
import './App.css';
import * as postsActions from './ducks/Posts';
import * as usersActions from './ducks/Users';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Client from './containers/Client';
import Admin from './containers/Admin';

class App extends Component {
    constructor(props) {
        super(props);
        const {fetchPosts, fetchUsers} = props;
        fetchUsers();
        fetchPosts();
    }

    render() {
        return (
            <div className="App">
                <Route exact path='/' component={Client}/>
                <Route exact path='/admin' component={Admin}/>
            </div>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators({
    ...postsActions,
    ...usersActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
