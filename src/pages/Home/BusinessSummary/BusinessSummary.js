import React from "react";
import { Row } from "react-bootstrap";
import BusinessInfo from "./BusinessInfo";
import "./BusinessSummary.css";
const BusinessSummary = () => {
  return (
    <section className="my-5 business-summary-container">
      <h2 className="text-center mb-3">Our Business Summary</h2>
      <Row xs={1} md={2} lg={3} className="justify-content-center">
        <BusinessInfo
          background="transparent"
          color="#fff"
          title="1 BN+"
          description="Daily Impressions"
        />
        <BusinessInfo
          background="white"
          color="#644f9c"
          title="$ 500K+"
          description="paid"
        />
        <BusinessInfo
          background="#ff6f00a9"
          color="#fff"
          title="8K+"
          description="Global Publishers"
        />
      </Row>
    </section>
  );
};

export default BusinessSummary;
