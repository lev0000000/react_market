import React, { useContext, useState } from "react";
import { Card, Container, Form, Button, Row, Nav } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
  const { user } = useContext(Context);

  const location = useLocation();

  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-2"
            placeholder="Введите ваш Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>

          <Form.Control
            className="mt-2"
            placeholder="Введите ваш Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></Form.Control>

          <Button
            className="mt-5"
            variant={"outline-success"}
            onClick={() => click()}
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>

          <Row>
            {isLogin ? (
              <div className="d-flex gap-2">
                Нет аккаунта?{" "}
                <Nav.Link
                  className="text-primary"
                  as={Link}
                  to={REGISTRATION_ROUTE}
                >
                  {" "}
                  Зарегистрируйся прямо сейчас!
                </Nav.Link>
              </div>
            ) : (
              <div className="d-flex gap-2">Забыл пароль?</div>
            )}
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
