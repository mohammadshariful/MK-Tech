import React from "react";
import bannerImg from "../../../assets/images/bannerImg.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-container  d-flex justify-contnet-between align-items-center flex-column-reverse flex-lg-row">
      <div className="w-100 w-lg-50 mt-3">
        <h1 className="subtitle">Digital services across the world</h1>
        <p className="fs-5">
          We are experienced and talented team of passionate consultants who
          provides digital ad marketing.
        </p>
      </div>
      <div className="w-100 w-lg-50">
        <img className="img-fluid rounded" src={bannerImg} alt="banner" />
      </div>
    </section>
  );
};

export default Banner;
