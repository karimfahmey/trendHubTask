import React from "react";
import { Link } from "react-router-dom";
import "./NewsItemStyle.scss";
import Likes from "../../assets/img/likes.svg";
import Comments from "../../assets/img/comments.svg";
import Views from "../../assets/img/views.svg";

const NewsItem = ({ news }) => {
  return (
    <ul>
      {news.map((item, index) => (
        <li key={index} className="tndh-news-item">
          <div className="tndh-news-item--media">
            <Link to={`/news/${item.id}`}  state={{item}}>
              <img src={require(`../../assets/img/news/${item.media}`)} alt={item.title} />
            </Link>
            <span className="tndh-news-item--date">
              <span>{item.category}</span>
            </span>
          </div>
          <div className="tndh-news-item--content">
            <h3 className="tndh-news-title">{item.title}</h3>
            <div className="tndh-news-meta">
              <p className="tndh-news-meta-item"><img src={Likes} alt="Likes" />{item.likes}</p>
              <p className="tndh-news-meta-item"><img src={Comments} alt="Comments" />{item.comments}</p>
              <p className="tndh-news-meta-item"><img src={Views} alt="Views" />{item.views}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NewsItem;
