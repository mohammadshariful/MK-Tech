import React from "react";
import { Link } from "react-router-dom";
import nativeAd from "../../../assets/images/navitveAd.png";
const Native = () => {
  return (
    <section className="d-flex justify-contnet-between flex-column-reverse flex-lg-row my-5">
      <div className="w-100 w-lg-50">
        <img className="img-fluid rounded" src={nativeAd} alt="banner" />
      </div>
      <div className="w-100 w-lg-50 m-3">
        <h2 className="subtitle">Native Ad</h2>
        <p>
          Native advertising is paid media designed to match the content of a
          media source. An example of mobile native advertising would be paid
          video content on the Youtube app. This media is designed to match the
          visual design and function of natural content, appearing in your feed
          of recommended videos.
        </p>
        <Link to="">Learn More</Link>
      </div>
    </section>
  );
};

export default Native;
