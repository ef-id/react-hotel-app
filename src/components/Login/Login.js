import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Form, Row, Col, Button, Container, InputGroup, FormControl } from 'react-bootstrap';
import style from '../Register/Form.module.css';

import { BsEnvelope, BsLock } from "react-icons/bs";
import { auth } from '../../utils/firebase';

const Login = ({
    history
}) => {
    const [err, setErr] = useState();

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                history.push('/');
            })
            .catch(error => {
                setErr('Email or password are wronged!');
            })
    };


    return (
        <Container fluid className={style.container}>
            <Row>
                <Col md={{ span: 4, offset: 4 }} className={style.registerForm}>
                    <Form className={style.form} onSubmit={onLoginFormSubmitHandler}>
                        <h3 className={style.title}>Login</h3>
                        <InputGroup className="mb-2" className={style.inputs}>
                            <InputGroup.Prepend>
                                <InputGroup.Text><BsEnvelope /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" name="email" placeholder="Email Address"/>
                        </InputGroup>
                        
                        <InputGroup className="mb-2" className={style.inputs}>
                            <InputGroup.Prepend>
                                <InputGroup.Text><BsLock /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="password" id="inlineFormInputGroup" name="password" placeholder="Password" />
                        </InputGroup>
                        <span className={style.errors}>{err}</span>
                        
                        <Form.Group className={style.btnContainer}>
                            <Button type="submit" className={style.formBtn}>Login</Button>
                        </Form.Group>
                        <Form.Group className={style.textContainer}>
                            <p>Don't have an account? <Link to="/register">Sing Up</Link></p>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;