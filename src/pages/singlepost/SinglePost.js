import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SinglePost.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";

import Map from "../../assets/img/map.png";
import Global from "../../assets/img/global.svg";
import Insta from "../../assets/img/ins-fo.svg";
import Fb from "../../assets/img/fb-fo.svg";

const SinglePost = () => {
  const location = useLocation();

  const event = location.state.event;

  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="breadcrumb">
              <ul>
                <li>
                  <a href="/">الرئيسية</a>
                </li>
                <li>
                  <i className="fa fa-angle-left"></i>
                  <span>الاحداث</span>
                </li>
                <li>
                  <i className="fa fa-angle-left"></i>
                  <span className="active">حدث جديد</span>
                </li>
              </ul>
              <Link to="/">
                <span className="back-home">
                  الرجوع الى الرئيسية <i class="fa-solid fa-arrow-left"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="single-post">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-1">
              <div className="single-event-data">
                <div className="single-event-date--content">
                  <div className="single-event-title-block">
                    <span className="tndh-events-item--date">
                      <span>{event.date.month}</span>
                      <span>{event.date.day}</span>
                    </span>
                    <h3 className="tndh-events-title">{event.title}</h3>
                  </div>
                  <div className="single-event-description">
                    {event.content}
                  </div>
                  <div className="tndh-events-meta">
                    <p className="tndh-events-location">
                      <i class="fa-sharp fa-solid fa-location-dot"></i>
                      {event.location}
                    </p>
                    <p className="tndh-events-time">
                      <i class="fa-solid fa-clock"></i>
                      {event.time}
                    </p>
                  </div>
                </div>
                <img
                  className="event-image"
                  src={require(`../../assets/img/events/${event.media}`)}
                  alt={event.title}
                />
              </div>
              <div className="single-event-data">
                <img className="map-image" src={Map} alt={event.title} />
                <div className="single-event-data--info">
                  <header className="single-event-data--info-header">
                    <h4 className="single-event-info--title">العنوان</h4>
                    <p className="single-event-info--description">
                      الشيخ محمد بن إبراهيم،، الدرعية الجديدة، الدرعية 13734
                    </p>
                  </header>
                  <footer className="single-event-links">
                    <div className="single-event-link">
                      <img src={Global} alt="instagram" />
                      <p>https://saudi-eventshow.com/</p>
                    </div>
                    <div className="single-event-link-social">
                      <div className="single-event-link">
                        <img src={Insta} alt="instagram" />
                        <p>حساب انستقرام</p>
                      </div>
                      <div className="single-event-link">
                        <img src={Fb} alt="facebook" />
                        <p>حساب الفيسبوك</p>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SinglePost;
