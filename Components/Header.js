/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Router from "next/router";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
  NavLink,
} from "react-bootstrap";
import style from "../styles/header.module.css";
const Header = () => {
  return (
    <Container fluid>
      {/* <Container> */}
      <Navbar collapseOnSelect expand="lg" variant="dark" className={style.nav}>
        <Container>
          <div>
            <img src="../images/mangcoding.png" />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className={style.navlinkEnd}>
            <Nav className={style.navbarnav}>
              <Nav.Link
                href="/"
                className={style.navlink}
                onClick={() => Router.push("/", "/")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/Shop"
                onClick={() => Router.push("/Shop", "/shop")}
                className={style.navlink}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                href="/About"
                className={style.navlink}
                onClick={() => Router.push("/About", "/about-us")}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="Contact"
                className={style.navlink}
                onClick={() => Router.push("/Contact", "/contact")}
              >
                Contact
              </Nav.Link>

              <Nav.Link className={style.navlink}>
                <div className={style.cartDiv}>
                  <img src="../Images/cartImage.png" height={24} width={24} />
                </div>
              </Nav.Link>
              <Nav.Link className={style.navlink}>
                <div className={style.likeDiv}>
                  <img src="../Images/likeImage.png" height={24} width={24} />
                </div>
              </Nav.Link>
              <Nav.Link className={style.navlink}>
                <div className={style.profileDiv}>
                  <img
                    src="../Images/profileImage.png"
                    height={24}
                    width={24}
                  />
                </div>
              </Nav.Link>
              <div className={style.searchDiv}>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <div className={style.searchImageDiv}>
                    <img
                      src="../Images/searchImage.png"
                      height={18}
                      width={18}
                    />
                  </div>
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </Container> */}
    </Container>
  );
};

export default Header;
