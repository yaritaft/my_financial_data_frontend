import React, {useState, useEffect} from 'react';
import axios from 'axios';


// Routing
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from '../config/page-settings.js';

// Ap constants for localStorage
import { AUTH_TOKEN, USERNAME, REMEMBERME, URI } from '../config/constants'

// React-bootstrap
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


function Dashboard() {
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Row>
                            <Col>
                            <Form.Label inline>From date</Form.Label>
                            <Form.Control inline label="" type="date" id="tx_created_date" />
                            </Col>
                            <Col>
                            <Form.Label>To date</Form.Label>
                            <Form.Control type="date" id="tx_created_date" />
                            </Col>
                        </Row>
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

export default withRouter(Dashboard)