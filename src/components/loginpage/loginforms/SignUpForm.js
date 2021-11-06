import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'



const schema = yup.object().shape({
    email: yup.string().required("Please enter your name").email("Please enter a valid email address"),
    password: yup.string().required("Please enter your message").min(8, "The message must be at least 8 characters"),
});

function SignUpForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });


    function onSubmit(data) {

        localStorage.setItem('Email', data.email)
        localStorage.setItem('Password', data.password)

        reset()
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

export default SignUpForm
