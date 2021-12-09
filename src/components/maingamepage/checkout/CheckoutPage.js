import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


function CheckoutPage() {

    const [cartItems,] = useState(JSON.parse(window.localStorage.getItem('game')))

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    const schema = yup.object().shape({
        firstName: yup.string().required('Please enter your name').min(3, 'We honestly dont believe you have only one letter as your last name. Try again!'),
        lastName: yup.string().required('Please enter your last name').min(3, 'We honestly dont believe you have only one letter as your last name. Try again!'),
        adress: yup.string().required('Please enter your adress').min(5, 'Please enter a valid adress'),
        email: yup.string().required('Email is required').email('Email is invalid'),
        postboxNumber: yup.number('Please enter you P.O BOX number').min(4, 'Please enter a valid P.O BOX number, minimum 4 numbers'),
        place: yup.string().required('Missing place, please enter where you are in the world').min(4, 'Please enter a valid P.O BOX number, minimum 4 numbers'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    let orderedItems = cartItems.filter(gameItems => gameItems.name === gameItems.name)

    function handleShow() {
        setShow(true)
    }

    return (
        <div>
            <Container className="loginform__container">

                <h1>Check out</h1>
                <p>You have ordered {orderedItems.length} games from us</p>

                <Form onSubmit={handleSubmit(handleShow)}>
                    <div className="checkout_containerform">
                        <div className="checkout_formfirstname">
                            <label className="loginform_label">FirstName:</label>
                            <input {...register('firstName')} placeholder="firstName" className="checkout_firstname" />
                            {errors.firstName && <p className="errormsg">{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <label className="loginform_label">LastName:</label>
                            <input {...register('lastName')} placeholder="lastName" className="checkout_firstname" />
                            {errors.lastName && <p className="errormsg">{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <div className="checkout_containeremail">
                        <div>
                            <label className="loginform_label">Email:</label>
                            <input {...register('email')} placeholder="Email" className="checkout_email" />
                            {errors.email && <p className="errormsg">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="checkout_containeradress">
                        <div>
                            <label className="loginform_label">Adress:</label>
                            <input {...register('adress')} placeholder="Adress" className="checkout_adress" />
                            {errors.adress && <p className="errormsg">{errors.adress.message}</p>}
                        </div>
                        <div>
                            <label className="loginform_label">Place</label>
                            <input {...register('place')} placeholder="Place" className="checkout_place" />
                            {errors.place && <p className="errormsg">{errors.place.message}</p>}
                        </div>
                        <div>
                            <label className="loginform_label">PO.BOX:</label>
                            <input {...register('postboxNumber')} placeholder="PO.BOX" className="checkout_pobox" />
                            {errors.postboxNumber && <p className="errormsg">{errors.postboxNumber.message}</p>}
                        </div>
                    </div>
                    <Button type="submit">
                        Send order
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Thank you for your purchase. A convfirmation order has been sent to your email.
                            When closing this window you will be redirected to the mainpage
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Container>
        </div>
    )
}

export default CheckoutPage
