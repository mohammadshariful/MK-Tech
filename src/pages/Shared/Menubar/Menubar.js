import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/icons/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import "./Menubar.css";
const Menubar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" d-flex justify-content-center align-items-center">
            <CustomLink to="">HOME</CustomLink>
            <CustomLink to="">ADVERTISERS</CustomLink>
            <CustomLink to="">PUBLISHERS</CustomLink>
            <CustomLink to="">INFLUENCERS</CustomLink>
            <CustomLink to="">AD FORMATS</CustomLink>
            <CustomLink to="">BLOG</CustomLink>
            <CustomLink to="">CONTACT US</CustomLink>
          </Nav>
          <div className="login-btn-container ms-auto">
            <button className="login-btn my-btn" type="button">
              LOGIN
            </button>
            <button className="signup-btn my-btn" type="button">
              SIGN UP
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
