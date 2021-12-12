import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from 'react-router';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


function CheckoutPage(props) {

    const [cartItems,] = useState(JSON.parse(window.localStorage.getItem('game')))

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)

    let history = useHistory();

    const schema = yup.object().shape({
        firstName: yup.string().required('Enter your name').min(3, 'Please enter your first name'),
        lastName: yup.string().required('Enter your last name').min(3, 'Please enter your last name'),
        adress: yup.string().required('Please enter your adress').min(5, 'Please enter a valid adress'),
        email: yup.string().required('Email is required').email('Email is invalid'),
        postboxNumber: yup.number('Missing P.O BOX number').typeError('Missing P.O BOX number'),
        place: yup.string().required('Missing place').min(4, 'Missing place'),
        creditnr: yup.number('Missing creditnumber').typeError('Missing creditnumber'),
        yearMonth: yup.number('Missing YY/DD').typeError('Missing YY/DD'),
        cvc: yup.number('Missing CVC number').typeError('Missing CVC')
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    let orderedItems = cartItems.filter(gameItems => gameItems.name === gameItems.name)

    function handleShow() {
        setLoading(true)
        setTimeout(() => {
            setShow(true)
            reset();
        }, 3000);
    }

    function handleClose() {
        setShow(false);
        localStorage.removeItem('game')
        history.push('/games')
    }

    return (
        <div>
            <Container className="loginform__container">

                <h1 className="checkout_heading">Check out</h1>
                <p className="checkout_ordereditems">You have ordered {orderedItems.length} games from us</p>

                <Form onSubmit={handleSubmit(handleShow)}>
                    <div className="checkout_containerform">
                        <div className="checkout_formfirstname">
                            <label className="loginform_label">FirstName:</label>
                            <input {...register('firstName')} placeholder="firstName" className="checkout_firstname" />
                            <div className="loginform_firstnamecont">
                                {errors.firstName && <span className="errormsg">{errors.firstName.message}</span>}
                            </div>
                        </div>
                        <div className="checkout_formlastname">
                            <label className="loginform_label">LastName:</label>
                            <input {...register('lastName')} placeholder="lastName" className="checkout_firstname" />
                            <div>
                                {errors.lastName && <span className="errormsg">{errors.lastName.message}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="checkout_containeremail">
                        <div>
                            <label className="loginform_label">Email:</label>
                            <input {...register('email')} placeholder="Email" className="checkout_email" />
                            {errors.email && <span className="errormsgemail">{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className="checkout_containeradress">
                        <div>
                            <label className="loginform_label">Adress:</label>
                            <input {...register('adress')} placeholder="Adress" className="checkout_adress" />
                            <div>
                                {errors.adress && <span className="errormsg">{errors.adress.message}</span>}
                            </div>
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
                    <div>

                        <h2 className="checkout_heading2">Credit card details</h2>
                        <div className="checkout_creditcardcontainer">
                            <div>
                                <input {...register('creditnr')} type="tel" maxLength="19" placeholder="Card Number" className="checkout_cardnr" />
                                {errors.creditnr && <p className="errormsg">{errors.creditnr.message}</p>}
                            </div>
                            <div>
                                <input {...register('yearMonth')} type="tel" maxLength="5" placeholder="MM / YY" className="checkout_yearmonth" />
                                {errors.yearMonth && <p className="errormsg">{errors.yearMonth.message}</p>}
                            </div>
                            <div>
                                <input {...register('cvc')} type="tel" maxLength="4" placeholder="CVC" className="checkout_cvc" />
                                {errors.cvc && <p className="errormsg">{errors.cvc.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="checkout_btncontainer">
                        <Button type="submit">
                            {loading ? 'Making transaction...' : 'Send order'}
                        </Button>
                    </div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        {...props}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Order complete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Thank you for your purchase. A confirmation order has been sent to your email.
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
