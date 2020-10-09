import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Contact extends Component {
    /**
    In each Form.Control section, the value is saved as someone types in that section of the form. 
    So, it starts as empty since no one has typed anything in. As text begins to enter the form, 
    the onChange event calls the appropriate function to set a new state based on the value entered
    in the form.
    **/
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onMessageChange = (event) => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = (event) => {
        console.log(this.state)
    }

    render() {
        return (
            <>
                <h1>Contact</h1>
                <Form className="contact-form">
                    <Form.Row>
                        <Form.Group as={Col} controlID="formGridFullName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            required placeholder="Full Name" 
                            value={this.state.name}
                            onChange={this.onNameChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlID="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            required type="email" 
                            placeholder="name@example.com" 
                            value={this.state.email}
                            onChange={this.onEmailChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlID="formGridMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                        required 
                        as="textarea"
                        rows={5}
                        value={this.state.message}
                        onChange={this.onMessageChange}/>
                    </Form.Group>

                    <Button 
                    variant='dark'
                    type="submit"
                    onClick={this.handleSubmit}
                    >Submit</Button>
                </Form>
            </>
        )
    }
}

export default Contact;
