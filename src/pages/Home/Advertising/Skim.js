import React from "react";
import { Link } from "react-router-dom";
import skimAd from "../../../assets/images/skimAd.png";
const Skim = () => {
  return (
    <section className="d-flex justify-contnet-between flex-column-reverse flex-lg-row my-5">
      <div className="w-100 w-lg-50">
        <img className="img-fluid rounded" src={skimAd} alt="banner" />
      </div>
      <div className="w-100 w-lg-50 m-3">
        <h2>Skim Ad</h2>
        <p>
          SKIM is a link that a publisher inserts on the specific website
          element text, image/icon, link or video, and after clicking on it, an
          advertisement appears to the user.
        </p>
        <Link to="">Learn More</Link>
      </div>
    </section>
  );
};

export default Skim;
