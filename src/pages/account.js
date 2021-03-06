import React, {useState, useEffect} from 'react';
import axios from 'axios';


// Routing
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from '../config/page-settings.js';

// Ap constants for localStorage
import { AUTH_TOKEN, USERNAME, REMEMBERME, URI } from '../config/constants'

// React-bootstrap
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function Account() {
    // const [id, setId] = useState('')
    // const [password, setPassword] = useState('')
    // const [checked, setChecked] = useState(false)
    // const [error_message, setError_message] = useState('')

    const handleSubmit = (data) => {
        // Backend
        data.preventDefault()

        let email = data.target.elements.email.value
        let password = data.target.elements.password.value
        let checkbox = data.target.elements.checkbox.checked

        console.log('BBBBB')
        axios.post(`${URI}/users`, { email, password, checkbox })
        .then(res => {
          console.log(res)
        })

        console.log('AAAAAA')

        


    }

    return(
        <div>
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="formBasicData">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" id="owner_name" />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your last name" id="owner_surname" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="owner_email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" id="password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

        </div>
    )
}

export default withRouter(Account)