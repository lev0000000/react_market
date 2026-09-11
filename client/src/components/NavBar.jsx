import React, { useContext } from "react";
import { Context } from "../main";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SHOP_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
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
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"}>Войти</Button>
            </>
            ):(
            <>
            <Button variant={"outline-light"} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
            </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
})

export default NavBar

