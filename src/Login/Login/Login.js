import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ProviderContext/ProviderContext';

const Login = () => {
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.form?.pathname || "/";
    const {signInUserEmail}=useContext(AuthContext);
    const handleLogOut=(event)=>{
            event.preventDefault();
            const form=event.target;
            const email=form.email.value;
            const password=form.password.value;
            console.log(email,password);
            signInUserEmail(email,password)
            .then(result=>{
                const user=result.user;
                console.log(user);
                form.reset();
                navigate(from ,{replace: true});
            })
            .catch(error=>{
                console.error("Error",error)
                setError(error.message)
            } )

    }

    return (
        <Form onSubmit={handleLogOut}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Sign In
        </Button>
        <Form.Text className=" text-danger">
           {error}
        </Form.Text>
      </Form>
    );
};

export default Login;