import React from "react";
import { Card, Container, Form, Button, Row, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export default function Auth() {
  const location = useLocation();

  const isLogin = location.pathname === LOGIN_ROUTE
  return (

    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{width:600}} className="p-5">
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-2"
            placeholder="Введите ваш Email"
          ></Form.Control>

          <Form.Control
            className="mt-2"
            placeholder="Введите ваш Пароль"
          ></Form.Control>

          <Button className="mt-5" variant={"outline-success"}>
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>

          <Row>
            {
              isLogin ? 
              <div className="d-flex gap-2">Нет аккаунта? <Nav.Link className="text-primary"  as={Link} to={REGISTRATION_ROUTE}> Зарегистрируйся прямо сейчас!</Nav.Link></div>
              :
              <div className="d-flex gap-2">Забыл пароль?</div>

            }
            </Row>
        </Form>
      </Card>
    </Container>
  );
}
