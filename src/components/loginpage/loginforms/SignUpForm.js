import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'

function SignUpForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(event) {
        localStorage.setItem('Email', email);
        setEmail(event.target.value)


        localStorage.setItem('Password', password);
        setPassword(event.target.value)
    }

    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Enter email" />

                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password" />
                        </Form.Group>
                    </Row>
                    <Button onClick={onSubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default SignUpForm
