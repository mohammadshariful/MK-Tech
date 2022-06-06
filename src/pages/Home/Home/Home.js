import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

const Home = () => {
  return (
    <Container className="my-5">
      <Banner />
      <Features />
    </Container>
  );
};

export default Home;
