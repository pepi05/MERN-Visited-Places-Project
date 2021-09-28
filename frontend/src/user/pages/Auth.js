import React, { useState, useContext } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: ''
        },
        password: {
            value: ''
        }
    })

    const [isLoginMode, setIsLoginMode] = useState(true);

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            })
        }
        else {
            setFormData({
                ...formState.inputs,
                name: ''
            })
        }
        setIsLoginMode(state => !state);
    }

    const authSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
        auth.login()
    }

    return (
        <Card className="authentication">
         <h2>Login required</h2>
         <hr />
      <form onSubmit={authSubmitHandler}>
          {!isLoginMode && <Input element="input" id="name" type="text" label="your name" onChange={inputHandler} />}
          <Input 
            id="email"
            element="input"
            type="email"
            label="Email"
            onChange={inputHandler}
          />
          <Input 
            id="password"
            element="input"
            type="password"
            label="Password"
            onChange={inputHandler}
          />
          <Button type="submit">
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button>
      </Card>
    )
}

export default Auth;