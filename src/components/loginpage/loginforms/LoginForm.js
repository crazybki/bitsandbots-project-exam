import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router';
import Container from 'react-bootstrap/Container'


const schema = yup.object().shape({
    email: yup.string().required("Please enter your name").email("Please enter a valid email address"),
    password: yup.string().required("Please enter your message").min(8, "The message must be at least 8 characters"),
});

function LoginForm() {

    let history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    async function onSubmit(data) {
        const email = localStorage.getItem('Email');
        const password = localStorage.getItem('Password');

        let userEmailInput = data.email;
        let userPasswordInput = data.password;

        if (email === userEmailInput && password === userPasswordInput) {
            history.push('/games')
        } else {
            console.log('Wrong email or password')
        }
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input {...register('email')} placeholder="Email" />
                        {errors.email && <p className="errormsg">{errors.email.message}</p>}
                    </div>
                    <div>
                        <input {...register('password')} placeholder="Password" />
                        {errors.password && <p className="errormsg">{errors.password.message}</p>}
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default LoginForm
