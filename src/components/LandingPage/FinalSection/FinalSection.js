import React from "react";
import "./FinalSection.css";
import GooglePlay from "../../asset/images/googlePlay.png";
import "animate.css";
import { Link } from "react-router-dom";

function FinalSection() {
  const arr = ["cards-final-section", "bg-Commodify "];
  const textColorFeatureDescription = [
    "text-description",
    "text-description-color-final",
  ];

  return (
    <div className={arr.join(" ")}>
      <h1 className="title">Commodify</h1>
      <p className={textColorFeatureDescription.join(" ")}>
        Join our active community with over a million traders worldwide and
        start trading commodities and modify your life.
      </p>
      <Link to="/register">
        <button className="start-now-btn-final-page ">Start Now</button>
      </Link>
      <p className="text-description-comD5">
        “For ease of trading anywhere and anytime, ComD5 can help you to achieve
        it”
      </p>
      <a href="https://drive.google.com/u/2/uc?id=1Xlpuyh_fENGw0-8eUkmZZV_EmDNx1zjm&export=download&confirm=t">
        <img
          className="center-googlePlay-logo"
          src={GooglePlay}
          alt="Show Google Play logo"
        />
      </a>
    </div>
  );
}

export default FinalSection;
