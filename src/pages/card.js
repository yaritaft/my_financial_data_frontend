import React, {useState, useEffect} from 'react';
import axios from 'axios';


// Routing
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from '../config/page-settings.js';

// Ap constants for localStorage
import { AUTH_TOKEN, USERNAME, REMEMBERME, URI } from '../config/constants'

// React-bootstrap
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


function Card() {
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

        console.log('AAAAAA')
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
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" id="card_description" />
                            <Form.Label>Bank</Form.Label>
                            <Form.Control type="text" placeholder="Enter associated bank" id="card_bank" />
                            <Form.Label>Card Type</Form.Label>
                            <Form.Control as="select" id="card_type">
                            <option>VISA</option>
                            <option>MASTERCARD</option>
                            <option>AMERICAN EXPRESS</option>
                            </Form.Control>
                            <Form.Label>Account</Form.Label>
                            <Form.Control as="select" id="card_owner">
                            <option>Personal account</option>
                            <option>Business account</option>
                            </Form.Control>
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

export default withRouter(Card)