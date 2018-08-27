import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Form, Button} from 'react-bootstrap';

const PostForm = ({handleSubmit}) =>
    <Form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label className='control-label'>Mensaje</label>
            <Field name='title' className='form-control' component='textarea'/>
            <Button bsStyle='success' type='submit'>Enviar</Button>
        </div>
    </Form>;


export default reduxForm({
    form: 'post',
})(PostForm)
