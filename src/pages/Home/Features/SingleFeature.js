import React from "react";
import { Col } from "react-bootstrap";

const SingleFeature = ({ feature }) => {
  return (
    <Col className="text-center">
      <div className="feature">
        <img className="icon-img" src={feature?.icon} alt="" />
        <h3 className="my-3">{feature?.title}</h3>
        <button className="feature-btn" type="btn">
          {feature?.btnName}
        </button>
      </div>
    </Col>
  );
};

export default SingleFeature;
