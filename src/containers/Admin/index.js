import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PostForm from '../../components/PostForm';
import List from '../../components/List';
import Loading from '../../components/Loading';
import * as postActions from '../../ducks/Posts';
import {bindActionCreators} from 'redux';
import {postsWithUsers} from '../mstp';
import {Grid, PageHeader} from 'react-bootstrap';

const Admin = ({addPost, delPost, data, fetching}) =>
    <Grid>
        <PageHeader>
            <div className='clearfix'>Administrador</div>
            <Link className='btn btn-primary' to='/'>Cliente</Link>
        </PageHeader>

        <PostForm onSubmit={addPost}/>
        {!fetching ? <List handleDelete={delPost} deletable data={data}/> : <Loading/>}
    </Grid>;


const mapDispatchToProps = dispatch =>
    bindActionCreators({
        ...postActions,
    }, dispatch);

export default connect(
    postsWithUsers,
    mapDispatchToProps,
)(Admin)