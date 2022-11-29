import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className="footer">
        <div className="icons">
          <a href="#">
            <img
              src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669138995/linkedin_aivdpy.png"
              className="social"
              alt="linkedin"
            />
          </a>

          <a href="#">
            <img
              src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669139077/youtube_mf4rzp.png"
              className="social"
              alt="youtube"
            />
          </a>
          <a href="#">
            {" "}
            <img
              src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669139047/facebook_nvoiex.png"
              className="social"
              alt="facebook"
            />
          </a>
          <a href="#">
            {" "}
            <img
              src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669139044/github_vhb40s.png"
              className="social"
              alt="github"
            />{" "}
          </a>
        </div>
        <div className="bouttons">
          <ul>
            <li className="titre">Work & Yamo</li>
            <li className="item">
              <a className="item__list" href="#">
                About Us
              </a>
            </li>
            <li className="item">
              <a className="item__list" href="#">
                Contacts
              </a>
            </li>
            <li className="item">
              <a className="item__list" href="#">
                Products
              </a>
            </li>
            <li className="item">
              <a className="item__list" href="#">
                Mentions légales
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          {" "}
          COPYRIGHT IT EGINEERING SOLUTION PRO CONSULTING{" "}
        </div>
      </div>
  )
}

export default Footer
