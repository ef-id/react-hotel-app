import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState } from 'react';

import { Form, Row, Col, Button, Container, InputGroup, FormControl } from 'react-bootstrap';
import style from './Form.module.css';

import { BsEnvelope, BsShieldLock, BsLock } from "react-icons/bs";
import { auth } from '../../utils/firebase';

const Register = ({ history }) => {

    const [err, setErr] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onRegisterSubmitHandler = (data, e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const repPass = e.target.repeatPass.value;

        if(password !== repPass){
            setErr('Password do not match');
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                history.push('/');
            });
    }

    return (
        <Container fluid className={style.container}>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form className={style.form} onSubmit={handleSubmit(onRegisterSubmitHandler)}>
                        <h3 className={style.title}>Registration</h3>
                        <InputGroup className="mb-2" className={style.inputs}>
                            <InputGroup.Prepend>
                                <InputGroup.Text><BsEnvelope /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" name="email" placeholder="Email Address" {...register("email", {
                            required: true, pattern: {
                                value: /\S+@\S+\.\S{2,}/,
                                message: "Entered value does not match email format"
                            }
                        })}/>
                        </InputGroup>
                        {errors.email && errors.email.type === "required" && <span className={style.errors}>Email is required</span>}
                        {errors.email && <span className={style.errors}>{errors.email.message}</span>}

                        <InputGroup className="mb-2" className={style.inputs}>
                            <InputGroup.Prepend>
                                <InputGroup.Text><BsLock /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="password" id="inlineFormInputGroup" name="password" placeholder="Password" {...register("password", {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }
                            })} />

                        </InputGroup>
                        {errors.password && errors.password.type === "required" && <span className={style.errors}>Password is required</span>}
                        {errors.password && <span className={style.errors}>{errors.password.message}</span>}

                        <InputGroup className="mb-2" className={style.inputs}>
                            <InputGroup.Prepend>
                                <InputGroup.Text><BsShieldLock /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="password" id="inlineFormInputGroup" name="repeatPass" placeholder="Re-type Password"/>
                        </InputGroup>
                        <span className={style.errors}>{err}</span>

                        <Form.Group className={style.btnContainer}>
                            <Button type="submit" className="float-right" className={style.formBtn}>Create Account</Button>
                        </Form.Group>
                        <Form.Group className={style.textContainer}>
                            <p>Already have an account? <Link to="/login">Sing In</Link></p>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;