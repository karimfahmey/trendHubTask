import React from "react";
import "./NewsLater.scss"

const NewsLater = () => {
  return (
    <div className="news-later">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
          <div className="col-md-8">
            <div className="tndh-hero-body">
              <h1>انضم الينا</h1>
              <p> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tndh-news-later-form">
              <form>
                <div className="input-group">
                    <input type="email" className="form-control" placeholder="البريد الالكترونى" />
                    <span className="input-group-btn">
                        <button className="btn" type="submit"> اشتراك</button>
                    </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
