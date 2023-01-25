import React from 'react'
import { useTranslation } from 'react-i18next';
import News from '../news/News';
import './SidebarStyle.scss';
import SocialMedia from './social-media/SocialMedia';

import GoogleApp from "../../assets/img/app-1.svg";
import IosApp from "../../assets/img/app-2.svg";
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [t] = useTranslation();
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-title">
          <h4>{t('latest-news')}</h4>
        </div>
        <div className="latest-news">
          <News />
        </div>
        <SocialMedia />
        <div className="download-app">
          <div className="download-title">
            <h4>حمّل التطبيق</h4>
            <p>تطبيق شامل يقدم لك آخر الأحداث في السعودية عبر تغطية مستمرة</p>
          </div>
          <div className="download-content">
            <Link><img src={IosApp} alt="Feacbook" /></Link>
            <Link><img src={GoogleApp} alt="Feacbook" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar