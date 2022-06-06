import React from "react";
import { Container } from "react-bootstrap";
import Advertising from "../Advertising/Advertising";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Features from "../Features/Features";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
  return (
    <Container className="my-5">
      <Banner />
      <Features />
      <Advertising />
      <BusinessSummary />
      <Testimonials />
    </Container>
  );
};

export default Home;
