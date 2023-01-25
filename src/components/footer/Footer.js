import React from "react";
import "./Footer.scss";
import Logo from "../../assets/img/logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Feacbook from "../../assets/img/fb-fo.svg";
import Instagram from "../../assets/img/ins-fo.svg";
import Snapchat from "../../assets/img/sv-fo.svg";
import Twitter from "../../assets/img/tw-fo.svg";

const Footer = () => {
  const [t] = useTranslation();

  return (
    <footer class="footer-wrapper d-flex flex-wrap justify-content-between align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="logo d-flex flex-wrap">
              <img src={Logo} alt="logo" />
              <div className="logo-heading">
                <h4>{t("logo")}</h4>
                <span>{t("slug")}</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <ul class="nav justify-content-center mb-3">
              <li class="nav-item">
                <Link href="#" class="nav-link px-2">
                  سياسة الخصوصية
                </Link>
              </li>
              <li class="nav-item">
                <Link href="#" class="nav-link px-2">
                  سياسة الاستخدام
                </Link>
              </li>
              <li class="nav-item">
                <Link href="#" class="nav-link px-2">
                  تواصل معنا
                </Link>
              </li>
            </ul>
            <p class="text-center">© 2022, جميع الحقوق محفوظة.</p>
          </div>

          <div className="col-md-4">
            <div className="social-links d-flex flex-wrap justify-content-end">
                <Link className='facebook'><img src={Feacbook} alt="Feacbook" /></Link>
                <Link className='instagram'><img src={Instagram} alt="Instagram" /></Link>
                <Link className='snapchat'><img src={Snapchat} alt="Snapchat" /></Link>
                <Link className='twitter'><img src={Twitter} alt="Twitter" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
