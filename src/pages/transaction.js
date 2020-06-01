import React, {useState, useEffect} from 'react';
import axios from 'axios';


// Routing
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from '../config/page-settings.js';

// Ap constants for localStorage
import { AUTH_TOKEN, USERNAME, REMEMBERME, URI } from '../config/constants'

// React-bootstrap
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


function Transaction() {
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
                            <Form.Control type="text" placeholder="Enter description" id="tx_description" />
                            <Form.Label>Transaction date</Form.Label>
                            <Form.Control type="date" id="tx_created_date" />
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" id="tx_category">
                            <option>INVESTMENT</option>
                            <option>GROCERIES</option>
                            <option>FOOD</option>
                            <option>SERVICES</option>
                            <option>RENT</option>
                            <option>LEISURE</option>
                            <option>EDUCATION</option>
                            <option>SAVING</option>
                            </Form.Control>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" id="tx_amount" />
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select" id="tx_category">
                            <option>CASHOUT</option>
                            <option>CASHIN</option>
                            </Form.Control>
                            <Form.Label>Associate credit card</Form.Label>
                            <Form.Control as="select" id="tx_category">
                            <option>VISA BBVA</option>
                            <option>MASTERCARD DEUTSCHE BANK</option>
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

export default withRouter(Transaction)