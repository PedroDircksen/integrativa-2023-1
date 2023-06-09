import React from 'react';
import { Button, Container, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'


function Login() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    }

    return (
        <>
            <div className='backgroundLogin' style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
                <Container fluid style={{ maxWidth: "500px" }}>
                    <Card className="bg-white my-5 mx-auto" style={{ borderRadius: "1rem" }}>
                        <Card.Body className="w-100 cardLogin">
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img src={logo} alt="Logo" className='logoLogin' />
                                <Form.Label className='nomePlataformaLogin'>
                                <span style={{ fontWeight: "bold" }}>SmartLearn</span> UNIPLAC
                                </Form.Label>
                            </div>
                            <Form style={{width: '100%'}}>
                                <Form.Group style={{ textAlign: "left" }} className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Usuário</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group style={{ textAlign: "left" }} className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form>
                            <Button size="md" className='btnLogin' onClick={handleLogin}>
                                Entrar
                            </Button>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default Login;