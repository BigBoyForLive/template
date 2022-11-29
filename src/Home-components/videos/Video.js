import React from "react";
import "./Video.css";
import { RiPlayMiniFill } from "react-icons/ri";

function Video() {
  return (
    <div className="presentation">
      <div className="text">
        <p className="title__text">Une Nouvelle approhe pédagogique</p>
      </div>
      <div className="video">
        <img
          src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669199531/x-IgUR1iX0mqM-unsplash_1_1_ybnkvn.svg"
          alt="etudiant work et yamo"
          className="video__worketyamo"
        ></img>
        <div className="button__video">
          <button class="button-3" role="button">
            <RiPlayMiniFill size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;
