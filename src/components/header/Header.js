import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import "./HeaderStyle.scss";
import Logo from "../../assets/img/logo.svg";

const Header = () => {
  const [t, i18n] = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="tndh-header-wrapper d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <div className="col-md-4">
              <div className="logo d-flex flex-wrap">
                <Link to='/'>
                  <img src={Logo} alt="logo" />
                </Link>
                <div className="logo-heading">
                  <h4>{t("logo")}</h4>
                  <span>{t("slug")}</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tndh-navbar-wrapper">
                <nav>
                  <NavLink to="/">{t("home")}</NavLink>
                  <NavLink to="/about">{t("about")}</NavLink>
                  <NavLink to="/events">{t("events")}</NavLink>
                  <NavLink to="/contact">{t("contact")}</NavLink>
                </nav>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tndh-header-action">
                <button type="button" className="btn btn-login me-2">
                  {t("login")}
                </button>
                <button type="button" className="btn btn-signup me-2">
                  {t("signup")}
                </button>
                {i18n.language === "en" && (
                  <button
                    type="button"
                    onClick={() => {
                      i18n.changeLanguage("ar");
                    }}
                    className="btn btn-lang"
                  >
                    AR
                  </button>
                )}
                {i18n.language === "ar" && (
                  <button
                    type="button"
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                    className="btn btn-lang"
                  >
                    EN
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
