import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import LoginForm from './loginforms/LoginForm'
import SignUpForm from './loginforms/SignUpForm'
import { Container } from 'react-bootstrap'
function SignUpPage() {
    return (
        <>
            <Container>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Login" title="Login">
                        <LoginForm />
                    </Tab>
                    <Tab eventKey="Sign up" title="Sign up">
                        <SignUpForm />
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

export default SignUpPage
