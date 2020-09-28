import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Contact extends Component {
    render() {
        return (
            <>
                <h1>Contact</h1>
                <Form className="contact-form">
                    <Form.Row>
                        <Form.Group as={Col} controlID="formGridFullName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlID="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlID="formGridMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                        required 
                        as="textarea"
                        rows={5}
                        />
                    </Form.Group>

                    <Button 
                    variant='dark'
                    type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default Contact;
