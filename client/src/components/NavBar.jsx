import React, { useContext } from "react";
import { Context } from "../main";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={SHOP_ROUTE}>
            SHOP REACT MARKET
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#features">Devices</Nav.Link>
            {user.isAuth ? (
              <>
                <Button
                  variant={"outline-light"}
                  onClick={() => navigate(ADMIN_ROUTE)}
                >
                  Админ панель
                </Button>
                <Button
                  variant={"outline-light"}
                  onClick={() => logout()}
                >
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant={"outline-light"}
                  onClick={() => navigate(LOGIN_ROUTE)}
                >
                  Авторизация
                </Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
