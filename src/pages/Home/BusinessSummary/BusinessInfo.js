import React from "react";
import { Col } from "react-bootstrap";

const BusinessInfo = ({ background, color, title, description }) => {
  return (
    <Col>
      <div
        style={{
          background: `${background}`,
          color: `${color}`,
        }}
        className="summary"
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BusinessInfo;
