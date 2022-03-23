import React, {useState} from "react";
import Card from "../card/Card";
import Input from "../input/Input";
import './Signup.css';
const Signup = (props) => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    
    const onPasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value)
    }
    
    const onNameChange = (event) => {
        setName(event.target.value)
    }
    const onClick = (event) => {
        let data = {
            username: name, 
            email: email, 
            password: password
        }       
    }

    return(
        <>
        <h1>Sign Up</h1>
            <Card>
                <Input type="text" value={name} onChange = {onNameChange} placeholder="Enter Name" />
                <Input type="email" value={email} onChange = {onEmailChange} placeholder="Enter Email" required/>
                <Input type="password" value={password} onChange = {onPasswordChange} placeholder="Enter Password" required/>
                <Input type="button" value="Signup" onClick = {onClick} />
            </Card>
        </>
    )
}

export default Signup;