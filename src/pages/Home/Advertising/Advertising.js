import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import "./Advertising.css";
const advertising = () => {
  return (
    <section className="my-5">
      <h2 className="section-title">
        <span>VERSATILE AD FORMATS</span>
      </h2>
      <div className="navigation-container">
        <CustomLink className="navigation-link" to="/">
          POP-UNDER
        </CustomLink>
        <CustomLink className="navigation-link" to="/banneradd">
          BANNER AD
        </CustomLink>
        <CustomLink className="navigation-link" to="/native">
          NATIVE
        </CustomLink>
        <CustomLink className="navigation-link" to="/skim">
          SKIM
        </CustomLink>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default advertising;
