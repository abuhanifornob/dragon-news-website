import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ProviderContext/ProviderContext';


const Registration = () => {
    const { createUseEmail, userProfileUpdate } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUseEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUserProfileUpdate(name, photo);
                form.reset();
                navigate('/');

            })
            .catch(error => {
                console.error("Error", error);
                setError(error.message);
            })
    }
    const handleUserProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userProfileUpdate(profile)
            .then(() => { })
            .catch(error => console.error("Error", error))

    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Phot URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Your Photo URL" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAccepted}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms and Condition</Link></>}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Sign Up
            </Button>
            <Form.Text className=" text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Registration;