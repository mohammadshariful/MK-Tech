import React from "react";
import bannerImg from "../../../assets/images/bannerImg.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-container  d-flex justify-contnet-between align-items-center flex-column-reverse flex-lg-row">
      <div className="w-100 w-lg-50">
        <h1>Here will be title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          suscipit atque, aperiam quibusdam nihil rerum. Totam laboriosam,
          ratione consequatur animi consequuntur inventore maiores, excepturi et
          nisi voluptatem omnis unde aspernatur?
        </p>
      </div>
      <div className="w-100 w-lg-50">
        <img className="img-fluid rounded" src={bannerImg} alt="banner" />
      </div>
    </section>
  );
};

export default Banner;
