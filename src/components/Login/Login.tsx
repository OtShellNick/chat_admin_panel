import React from 'react';
import {Container} from '@mui/material';
import Form, {Fields} from 'sbx-react-form';

import './Login.scss';
import {login} from "@actions/users";


export const Login = () => {

    return <Container
        maxWidth='md'
        sx={{height: '100%', display: 'flex'}}>
        <Form
            onSubmit={login}>
            <Fields.input {...{
                name: 'username',
                label: 'Login'
            }}/>
            <Fields.input {...{
                name: 'password',
                label: 'Password'
            }}/>
            <button type='submit'>Login</button>
        </Form>
    </Container>
}