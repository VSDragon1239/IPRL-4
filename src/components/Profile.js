import React from 'react';
import {Col, Container, Form, Image, ListGroup, Row} from "react-bootstrap";
import profile from "../images/Rectangle 85-1.png";
import {Link} from "react-router-dom";
import {DOCUMENTS_ROUTE, FAVORITES_ROUTE, HISTORY_ROUTE} from "../utils/consts";


const Profile = () => {
    return (
        <Container className="my-3">
            <h2 className="mb-3 d-flex align-content-center justify-content-center">Личные данные</h2>
            <Row className={"d-flex align-content-center justify-content-center"}>
                <Col xs={4}>
                    <Image src={profile} roundedCircle /> {/* Замените "profile.jpg" на путь к вашему изображению */}
                </Col>
                <Col xs={8}> {/*Деление на колонки*/}

                    <Form>
                        <Form.Group xs={8} className="mb-3"> {/*Отступы*/}
                            <Form.Label>Полное имя:</Form.Label>
                            <Form.Control type="text" className="form-control" />
                        </Form.Group>
                        <Form.Group  xs={8} className="mb-3">
                            <Form.Label>Логин:</Form.Label>
                            <Form.Control type="text" placeholder="Логин" className="form-control" />
                        </Form.Group>
                        <Form.Group  xs={4} className="mb-6">
                            <Form.Label>Почта:</Form.Label>
                            <Form.Control type="text" placeholder="Почта" className="form-control" />
                        </Form.Group>
                        <Form.Group  xs={4} className="mb-6">
                            <Form.Label>Телефон:</Form.Label>
                            <Form.Control type="text" placeholder="Телефон" className="form-control" />
                        </Form.Group>
                        <Form.Group  xs={8} className="mb-3">
                            <Form.Label>Пароль:</Form.Label>
                            <Form.Control type="password" placeholder="Пароль" className="form-control" />
                        </Form.Group>
                    </Form>
                </Col>

            </Row>
            <Row className={"d-flex align-content-center justify-content-center"}>
                <Col xs={12} className={"d-flex align-content-center justify-content-center"}>
                    <ListGroup>
                        <Link to={FAVORITES_ROUTE} className="mb-1">
                            <ListGroup.Item>Избранное</ListGroup.Item>
                        </Link>
                        <Link to={HISTORY_ROUTE} className="mb-1">
                            <ListGroup.Item>История покупок</ListGroup.Item>
                        </Link>
                        <Link to={DOCUMENTS_ROUTE} className="mb-1">
                            <ListGroup.Item>Документы</ListGroup.Item>
                        </Link>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;