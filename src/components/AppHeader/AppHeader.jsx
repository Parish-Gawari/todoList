/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppHeader = () => {
  return (
    <>
      <header>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Todo List</Navbar.Brand>
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default AppHeader;
