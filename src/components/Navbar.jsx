import React from "react";
import { Navbar as ReactNavbar, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <ReactNavbar bg="danger" variant="dark">
        <Container>
          <ReactNavbar.Brand
            href="#home"
            class="fw-bold text-decoration-none text-light"
          >
            Bookmyshow
          </ReactNavbar.Brand>
        </Container>
      </ReactNavbar>
    </>
  );
};

export default Navbar;
