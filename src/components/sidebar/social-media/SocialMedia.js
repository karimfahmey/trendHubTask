import React from 'react'
import { Link } from 'react-router-dom'
import "./SocialMedia.scss";
import Feacbook from "../../../assets/img/feacbook.svg";
import Instagram from "../../../assets/img/instagram.svg";
import Snapchat from "../../../assets/img/snapchat.svg";
import Twitter from "../../../assets/img/twitter.svg";

const SocialMedia = () => {
  return (
    <div className="social-media">
        <div className="social-title">
          <h4>ابق على اطلاع</h4>
        </div>
        <div className="social-media-icons">
            <Link className='facebook'><img src={Feacbook} alt="Feacbook" /></Link>
            <Link className='instagram'><img src={Instagram} alt="Instagram" /></Link>
            <Link className='snapchat'><img src={Snapchat} alt="Snapchat" /></Link>
            <Link className='twitter'><img src={Twitter} alt="Twitter" /></Link>
        </div>
    </div>
  )
}

export default SocialMedia