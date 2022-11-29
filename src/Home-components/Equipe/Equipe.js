import React from 'react'
import "./Equipe.css"
function Equipe() {
  return (
    <div className="equipe">
    <div className="title">
      <p className="title__big">Découvrez Notre Équipe</p>
      <p className="title__small">
        Découvrez l'équipe  d'administration Work et yamo
      </p>
    </div>
    <div className="card">
      <div className="card__item">
        <div className="card__item___image">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669138962/idriss-2_dyinpp.svg"
            alt="Idiss"
            className="img"
          />
        </div>
        <div className="card__item__name">
          <p className="name">Idriss-françois Eliguene</p>
          <p className="poste">CEO IT engineering & Promoteur work et yamo</p>
        </div>
        <div className="card__item__button">
          <button className="yess"> Lire la Bio</button>
        </div>
      </div>
      <div className="card__item">
        <div className="card__item___image">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669226933/Group_16_h8v6mp.svg"
            alt="sylviane"
            className="img"
          />
        </div>
        <div className="card__item__name">
          <p className="name">Sylviane Essi Abomo</p>
          <p className="poste">Project Manager</p>
        </div>
        <div className="card__item__button">
          <button className="yess"> Lire la Bio</button>
        </div>
      </div>
      <div className="card__item">
        <div className="card__item___image">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669227208/Group_18_amwtvm.svg"
            alt="harouna"
            className="img"
          />
        </div>
        <div className="card__item__name">
          <p className="name">Haruna Rashid Yakubu</p>
          <p className="poste">Responsable des programmes</p>
        </div>
        <div className="card__item__button">
          <button className="yess"> Lire la Bio</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Equipe
