import React from "react";
import { Link } from "react-router-dom";
import bannerAd from "../../../assets/images/bannerAdd.png";
const BannerAdd = () => {
  return (
    <section className="d-flex justify-contnet-between flex-column-reverse flex-lg-row my-5">
      <div className="w-100 w-lg-50">
        <img className="img-fluid rounded" src={bannerAd} alt="banner" />
      </div>
      <div className="w-100 w-lg-50 m-3">
        <h2 className="subtitle">Banner Ad</h2>
        <p>
          Banners are the creative rectangular ad that are shown along the top,
          side, or bottom of a website in hopes that it will drive traffic to
          the advertiser's proprietary site, generate awareness, and overall
          brand consideration. This type of visual banner-style online
          advertising is a form of display advertising.
        </p>
        <Link to="">Learn More</Link>
      </div>
    </section>
  );
};

export default BannerAdd;
