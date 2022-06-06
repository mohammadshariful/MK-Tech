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
      title: "Text 1",
      icon: speaker,
      btnName: "Hello 1",
    },
    {
      _id: 2,
      title: "Text 2",
      icon: email,
      btnName: "Hello 2",
    },
    {
      _id: 3,
      title: "Text 3",
      icon: user,
      btnName: "Hello 3",
    },
  ];
  return (
    <section className="my-5">
      <h2 className="section-title">
        <span>AVAILABLE FOR EVERYONE</span>
      </h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam veniam
        consequuntur facere laudantium, pariatur dolorem doloremque
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
