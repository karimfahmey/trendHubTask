import React from "react";
import data from "../../dummy-data.json";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div className="tndh-news-wrapper">
      <NewsItem news={data.news} />
    </div>
  );
};

export default News;
