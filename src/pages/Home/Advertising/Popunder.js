import React from "react";
import { Link } from "react-router-dom";
import popunder from "../../../assets/images/popunder.png";
const Popunder = () => {
  return (
    <section className="d-flex justify-contnet-between flex-column-reverse flex-lg-row my-5">
      <div className="w-100 w-lg-50">
        <img className="img-fluid rounded" src={popunder} alt="banner" />
      </div>
      <div className="w-100 w-lg-50 m-3">
        <h2 className="subtitle">Pop-Under Ad</h2>
        <p>
          The pop-under ad is the sneakier relative of the pop-up ad. While
          pop-up ads are often shown (and closed) instantly, pop-under ads
          linger behind the current browser window, appearing only after other
          windows have been closed.
        </p>
        <Link to="">Learn More</Link>
      </div>
    </section>
  );
};

export default Popunder;
