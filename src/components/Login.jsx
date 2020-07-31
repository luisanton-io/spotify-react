import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import GreenBtn from './GreenBtn'
import Divider from './Divider'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoApple from 'react-ionicons/lib/LogoApple'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (<div className="bg-white">
            <Container>
                <Row>
                    <Image id="login-logo" className="mt-3 mx-auto" src="/logo/logo-black.png" />
                </Row>
            </Container>

            <hr />

            <Container fluid id="login-content">
                <Row>
                    <Col xs={12} className="mt-3 mb-2 text-center font-weight-bold">
                        <span>To continue, log in to Spotify.</span>
                    </Col>
                    <Col xs={12} className="my-1 px-0">
                        <Button className="btn-fb rounded-pill w-100 text-uppercase d-flex justify-content-center align-content-center">
                            <LogoFacebook color="white" className="mr-2" style={{marginTop: "-2px"}}/>
                                Continue with Facebook
                        </Button>
                    </Col>
                    <Col xs={12} className="my-1 px-0">
                        <Button variant="dark" className="rounded-pill w-100 text-uppercase d-flex justify-content-center align-content-center">
                            <LogoApple color="white" className="mr-2" style={{marginTop: "-2px"}}/>
                                Continue with Apple
                        </Button>
                    </Col>
                    
                    <Divider text="or"/>
                    
                    <Col xs={12} className="mb-3 px-1" id="credentials">
                        <input type="text" className="form-control input-with-feedback my-1" name="username" id="login-username" placeholder="Email address or username" />
                        <input type="password" className="form-control input-with-feedback my-1" name="password" id="login-password" placeholder="Password" />
                    </Col>
                    
                    <Col xs={12} sm={6} className="d-flex align-items-center pl-0">
                        <div className="ml-0 mt-2 d-flex align-content-center text-muted">
                            <label className="checkbox mr-2">
                                <input type="checkbox" />
                            </label>
                            <span className="mb-2">Remember Me</span>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} className="px-0 mt-3 mt-md-0">
                        <Link to="/">
                            <GreenBtn text="Log in"/>
                        </Link>
                    </Col>
                    
                    <Col xs={12} className="text-center mt-3">
                        <p>
                        <a id="reset-password-link" href="https://www.spotify.com/password-reset/">Forgot your password?</a>
                        </p>
                    </Col>
                    
                    <Divider />
                    
                    <Col xs={12} className="mt-3 mb-1 text-center">
                        <h5 style={{fontWeight: 800}}>Don't have an account?</h5>
                    </Col>
                    
                    <Col xs={12} className="text-center my-3">
                        <Button variant="outline-secondary" className="rounded-pill w-100 text-uppercase" style={{borderWidth: "2px"}}>Sign up for Spotify</Button>
                    </Col>
                    
                    <Divider />
                                        
                    <Col xs={12} className="mt-3">
                        <p className="text-muted disclaimer text-center" style={{fontSize: ".7em"}}>If you click "Log in with Facebook" and are not a Spotify user, you will be registered and you agree to Spotify's <a href="https://www.spotify.com/legal/end-user-agreement/plain/" target="_blank">Terms &amp; Conditions</a> and <a href="https://www.spotify.com/legal/privacy-policy/plain/" target="_blank">Privacy Policy</a>.</p>
                    </Col>
                    
                </Row>
            </Container>
    </div>);
    }
}

export default Login;