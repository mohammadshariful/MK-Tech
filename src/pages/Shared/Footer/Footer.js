import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import facebook from "../../../assets/icons/facebook.png";
import instagram from "../../../assets/icons/instagram.png";
import logo from "../../../assets/icons/logo.png";
import youtube from "../../../assets/icons/youtube.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="mt-5 footer-container">
      <Container className="text-center">
        <Row xs={1} md={2} lg={4} className="justify-content-center">
          <Col>
            <div>
              <h5 className="footer-title">We are Socail</h5>
              <p>FOLLOW US</p>
              <ul className="list-unstyled d-flex justify-content-center align-items-center">
                <li>
                  <img src={instagram} alt="" />
                </li>
                <li>
                  <img src={facebook} alt="" />
                </li>
                <li>
                  <img src={youtube} alt="" />
                </li>
              </ul>
              <div className="d-flex align-items-center justify-content-center mb-2">
                <img src={logo} alt="" /> <span className="ms-2">AdCorp</span>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="footer-title">Links</h5>
              <ul className="list-unstyled">
                <li>ADVERTISERS</li>
                <li>PUBLISHERS</li>
                <li>INFLUENCERS</li>
                <li>ADD FORMATS</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="footer-title">Documentation</h5>
              <ul className="list-unstyled">
                <li>TERMS & CONDITIONS</li>
                <li>PRIVACY POLICY</li>
                <li>CANCELLATION POLICY</li>
                <li>BLOG</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="footer-title">Support</h5>
              <ul className="list-unstyled">
                <li>FAQ</li>
                <li>MEDIA KIT</li>
                <li>CONTACT US</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
