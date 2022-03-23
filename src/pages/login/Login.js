import React from 'react';
import Card from '../card/Card';
import { useState } from 'react';
import Input from '../input/Input';
import Loginn from './Loginn.css';

const Login = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onEmailChange = (event) => {
       
            console.log("Email", event.target.value)
            setEmail(event.target.value)   
    }
    const onPasswordChange = (event) => {
        console.log("Password",event.target.value)
        setPassword(event.target.value)
    }
    
    const onClick = (event) => {
        console.log("clicked")
        let data = {
            "username": email,
            "password":password
        }
    }
 
    return (
        <>
          <h1 className='header'>Log In</h1>
            <Card>
                <Input value={email} type="email" onChange = {onEmailChange} placeholder="Username" required/>
                <Input value={password} type="password" onChange = {onPasswordChange} placeholder="Enter Password" required/>
                <Input type="button" value="Login" onClick = {onClick} />
            </Card>  
        </>    
    );
};

export default Login; 