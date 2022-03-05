import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function AddCustomer() {
    // form input to add Customer
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        rewardsLevel: '',
    });


    // let address = { ...customer.address }
    // console.log(address);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const {
            firstName,
            lastName,
            username,
            email,
            street1,
            street2,
            city,
            state,
            zipCode,
            phone,
            rewardsLevel,
        } = formState;
        try {
            //  await addUser({
            //     variables: { 
            //         username: username,
            //         email: email,
            //         password: password
            //      },
            // });
            alert("You Did It!");
        } catch (e) {
            console.error(e);
        }
        setFormState({
            firstName,
            lastName,
            username,
            email,
            street1,
            street2,
            city,
            state,
            zipCode,
            phone,
            rewardsLevel,
        });
    };

    function goBack() {
        document.location.replace(`/`);
    }
    
    return (
        <Container className='p-4 my-4'>
            <div className="content">
                <Row>
                    <Col md="4">
                        <Card className="card-user">
                            <Card.Body>
                                <div className="author">
                                    <img
                                        alt="..."
                                        className="avatar border-gray"
                                        src={"http://placecorgi.com/260/180"}
                                    />
                                    <h5 className="title">{formState.firstName} {formState.lastName}</h5>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <hr />
                                <div className="button-container">
                                    <Row>
                                        <Col className="ml-auto" lg="3" md="6" xs="6">
                                            <h5>
                                                12 <br />
                                                <small>Files</small>
                                            </h5>
                                        </Col>
                                        <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                                            <h5>
                                                2GB <br />
                                                <small>Used</small>
                                            </h5>
                                        </Col>
                                        <Col className="mr-auto" lg="3">
                                            <h5>
                                                24,6$ <br />
                                                <small>Spent</small>
                                            </h5>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Footer>
                        </Card>

                    </Col>
                    <Col md="8">
                        <Card className="card-user">
                            <Card.Header>
                                <Card.Title tag="h5">Edit Profile</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleFormSubmit}>
                                    <Row>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>Username</label>
                                                <Form.Control
                                                    name="username"
                                                    value={formState.username}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
                                                </label>
                                                <Form.Control
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    type="email" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>First Name</label>
                                                <Form.Control
                                                    name="firstName"
                                                    value={formState.firstName}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Last Name</label>
                                                <Form.Control
                                                    name="lastName"
                                                    value={formState.lastName}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Address</label>
                                                <Form.Control
                                                    name="street1"
                                                    value={formState.street1}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Address 2</label>
                                                <Form.Control
                                                    name="street2"
                                                    value={formState.street2}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>City</label>
                                                <Form.Control
                                                    name="city"
                                                    value={formState.city}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <Form.Group>
                                                <label>State</label>
                                                <Form.Control
                                                    name="state"
                                                    value={formState.state}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>Zip Code</label>
                                                <Form.Control
                                                    name="zipCode"
                                                    value={formState.zipCode}
                                                    onChange={handleChange}
                                                    type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Form.Group>
                                                <label>Phone</label>
                                                <Form.Control
                                                    name="phone"
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group>
                                                <label>Rewards Level</label>
                                                <Form.Control
                                                    name="rewardsLevel"
                                                    value={formState.rewardsLevel}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="update ml-auto mr-auto py-4`">
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                                type="submit"
                                            >
                                                Add Customer
                                            </Button>
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                                onClick={() => goBack()}
                                            >
                                                Go Back
                                            </Button>
                                        </div>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
};