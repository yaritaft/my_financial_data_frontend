import React, {useState, useEffect} from 'react';
import axios from 'axios';


// Routing
import { Link, withRouter } from 'react-router-dom';
import { PageSettings } from '../config/page-settings.js';

// Ap constants for localStorage
import { AUTH_TOKEN, USERNAME, REMEMBERME, URI } from '../config/constants'

// React-bootstrap
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


function Home() {
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
        // axios.post(`${URI}account/`, { "owner_name": "tp", "owner_surname": "333" })
        const requestOptions = {
            method: 'POST',
            // mode: "no-cors",
            headers: { 'Content-Type': "application/json",
         },
            body: JSON.stringify({ owner_name: 'tp', owner_surname:'23'})
        };
        fetch(`${URI}account/`, requestOptions)
        .then(response => console.log(response.json()))
        .then(data => console.log({ postId: data }));
    }

        console.log('AAAAAA')

    return(
        <div>
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="formBasicEmail">
                        <a href="/account"><Button variant="primary" size="lg" block >Create account</Button>{' '}</a>
                        <a href="/card"><Button variant="secondary" size="lg" block>Create card</Button>{' '}</a>
                        <a href="/transaction"><Button variant="success" size="lg" block>Create transactions</Button>{' '}</a>
                        <a href="/dashboard"><Button variant="warning" size="lg" block >Dashboard</Button>{' '}</a>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>

        </div>
    )
}

export default withRouter(Home)