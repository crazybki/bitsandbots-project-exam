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
            <Container className="loginform__container">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="loginform_label">Email:</label>
                        <input {...register('email')} placeholder="Email" className="loginform_email" />
                        {errors.email && <p className="errormsg">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="loginform_label">Password:</label>
                        <input {...register('password')} placeholder="Password" type="password" className="loginform_password" />
                        {errors.password && <p className="errormsg">{errors.password.message}</p>}
                    </div>
                    <div className="loginform_btncontainer">
                        <button type="submit" className="loginform_btn">Register</button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default SignUpForm
