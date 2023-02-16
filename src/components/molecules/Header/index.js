import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './header.scss'
import { IconFoot, IcAccount } from '../../../assets/index';
import { Col, Row } from "react-bootstrap";


const Header = () => {
    return (
        <>
            <Navbar className="header">

                {/* <Container> */}
                <Row className="w-100">
                    <Col md={8}>
                        <Navbar.Brand className="label">
                            <img className="logo"
                                src={IconFoot} alt='icon'
                            />
                            React Bootstrap
                        </Navbar.Brand>
                    </Col>
                    <Col md={4}>
                        <div className="form-search">
                            <Form className="w-100">
                                <div className="form-content">
                                    <div className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button className="btn-search" variant="outline-success">Search</Button>
                                    </div>
                                    <div className="d-flex">
                                        <img
                                            src={IcAccount}
                                            className="account"
                                            alt="img-account"
                                        />
                                    </div>

                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
                {/* </Container> */}

            </Navbar>
        </>

    )
}

export default Header;