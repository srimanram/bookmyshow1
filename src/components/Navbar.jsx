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
          <ReactNavbar.Text className="justify-content-end">
            Developed by sriman
          </ReactNavbar.Text>
        </Container>
      </ReactNavbar>
    </>
  );
};

export default Navbar;
