import React from "react";
import "./Discours.css";

function Discours() {
  return (
    <div className="discours">
      <div className="discour__container">
        <img
          src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669138962/idriss_ahnwol.svg"
          alt="idriss-françois eliguene"
          className="discours__image"
        />
        <div className="discours__text">
          <p className="guillemets">"</p>
          <p className="discours__idriss">
            Work & Yamo met a votre disposition un ensemble d'outils , de
            programmes et plus de 15000 formations la pointe de la technologie
            afin de vous guarantir un accès rapide aux marchés de l'emploi
          </p>
          <p className="guillemets1">"</p>
          <div className="discours__role">
            <p className="discours__nom">Idriss-françois Eliguene</p>
            <p className="discours__fonction">
              Le Promoteur de l'initiative, Ingénieur DevOps Sénior
            </p>
          </div>
        </div>
      </div>
      <div className="atouts__title">Nos Atouts</div>
    </div>
  );
}

export default Discours;
