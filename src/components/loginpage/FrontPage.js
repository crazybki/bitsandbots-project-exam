import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import LoginForm from './loginforms/LoginForm'
import SignUpForm from './loginforms/SignUpForm'
import { Container } from 'react-bootstrap'
import backgroundVideo2 from '../../assets/Characters - compressed.mp4'


function FrontPage() {
    return (
        <div>
            <div className="frontpage_containercenter">
                <Container className="frontpage_tabcontainer">
                    <Tabs defaultActiveKey="Login" className="mb-3 fontpage_tabs">
                        <Tab eventKey="Login" title="Login">
                            <LoginForm />
                        </Tab>
                        <Tab eventKey="Sign up" title="Sign up">
                            <SignUpForm />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
            <video autoPlay loop muted className="frontpage_videobackground">
                <source src={backgroundVideo2} type='video/mp4' />
            </video>
        </div>
    )
}

export default FrontPage
