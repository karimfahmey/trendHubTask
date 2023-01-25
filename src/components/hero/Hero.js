import React from "react";
import HeroImg from "../../assets/img/hero.svg";
import "./HeroStyle.scss";

const Hero = () => {
  return (
    <div className="tndh-hero-wrapper">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
          <div className="col-md-8">
            <div className="tndh-hero-body">
              <h1>عنوان هام جدا</h1>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها.
              </p>
            </div>
            <div className="tndh-hero-serach">
              <form>
                <div className="input-group">
                  <span className="input-group-text">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input    
                    type="text"
                    className="form-control"
                    placeholder="أبحث..."
                    aria-label="search"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <img src={HeroImg} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
