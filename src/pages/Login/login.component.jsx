import React from 'react';
import './login.styles.scss';
import LoginComp from '../../components/login/login.component';

//Considering a functional component since we are not working with state here, 
//ideally it should be a class based component with state.

const Login = () => (
    <div class="my-login">
        <LoginComp />
    </div>
    
)
export default Login;