import React from "react";
import { Row } from "react-bootstrap";
import email from "../../../assets/icons/send.png";
import speaker from "../../../assets/icons/speaker.png";
import user from "../../../assets/icons/user.png";
import "./Features.css";
import SingleFeature from "./SingleFeature";
const Features = () => {
  const features = [
    {
      _id: 1,
      title: "Marketing Base",
      icon: speaker,
    },
    {
      _id: 2,
      title: "Consulting Services",
      icon: email,
    },
    {
      _id: 3,
      title: "Creative Ideas",
      icon: user,
    },
  ];
  return (
    <section className="my-5">
      <h2 className="section-title">
        <span>AVAILABLE FOR EVERYONE</span>
      </h2>
      <p className="text-center fs-5">
        There are lots of reasons why people need advice from a financial
        adviser but there are also lots of different types of advisers, so it`s
        worth knowing who to go to and when.
      </p>
      <Row xs={1} md={2} lg={3} className="justify-content-center">
        {features.map((feature) => (
          <SingleFeature key={feature._id} feature={feature} />
        ))}
      </Row>
    </section>
  );
};

export default Features;
