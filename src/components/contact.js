import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import axios from 'axios';

const SubmitToast = () => {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
    );
}

class Contact extends Component {
    /**
    In each Form.Control section, the value is saved as someone types in that section of the form. 
    So, it starts as empty since no one has typed anything in. As text begins to enter the form, 
    the onChange event calls the appropriate function to set a new state based on the value entered
    in the form.

    When the Submit button is clicked, the fields of the form will be validated. If all fields are valid,
    then the POST request happens.
    **/
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            validated: false,
            submitted: false,
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
        event.preventDefault()
        console.log(this.state.submitted)

        const form = event.currentTarget

        if (form.checkValidity() === false) {
            // Sets the validated state to True, allowing the validation messages to be present.
            // The validation messages persist until the form fields become valid.
            
            //console.log(form.checkValidity())

            this.setState({ validated: true });
        } else {
            //console.log(form.checkValidity())

            axios.post("http://localhost:8000/api/contact/", 
                { 
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message,
                }, 
                )
                .then(response => {
                    console.log(response.data);
                    this.resetForm();
                    this.setState({ submitted: true });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    resetForm = () => {
        // Reset all states to initial values.
        this.setState({ name: '', email: '', message: '', validated: false, submitted: false });
    }
    
    toggleToast = () => {
        console.log(this.state.submitted);
        this.setState({ submitted: false });
    }

    render() {
        return (
            <>
                <h1>Contact</h1>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlid="formGridFullName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            required placeholder="Full Name" 
                            value={this.state.name}
                            onChange={this.onNameChange}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide your name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlid="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            required type="email" 
                            placeholder="name@example.com" 
                            value={this.state.email}
                            onChange={this.onEmailChange}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlid="formGridMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                        required 
                        as="textarea"
                        rows={5}
                        value={this.state.message}
                        onChange={this.onMessageChange}/>
                        <Form.Control.Feedback type="invalid">
                            Please type in your message.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                    variant='dark'
                    type="submit"
                    >Submit</Button>
                </Form>

                { this.state.submitted ? (
                    <Toast show={this.state.submitted} onClose={this.toggleToast}>
                        <Toast.Header>
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                    ) : (
                        null
                    )}
            </>
        )
    }
}

export default Contact;
