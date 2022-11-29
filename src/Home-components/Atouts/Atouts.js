import React from 'react'
import "./Atouts.css"

function Atouts() {
  return (
    <div className="atouts">
        <div className="atouts__items">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669139024/computer_vwqvnx.svg"
            alt=""
            className="atouts__items__img"
          />
          <p className="atouts__items__name">
          des ordinateurs de dernière génération
          </p>
        </div>
        <div className="atouts__items">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669139048/professionel_oxlx0t.png"
            alt=""
            className="atouts__items__img"
          />
          <p className="atouts__items__name">
            Un accompagnement et une orientation par des professionnels
          </p>
        </div>
        <div className="atouts__items">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669139066/wifi-tower_hjj5vk.png"
            alt=""
            className="atouts__items__img"
          />
          <p className="atouts__items__name">
          Une connexion internet haut debit
          et illimitée
          </p>
        </div>
        <div className="atouts__items">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669138985/certification_qxit9q.png"
            alt=""
            className="atouts__items__img"
          />
          <p className="atouts__items__name">
          Des certifications de fin de formation
          </p>
        </div>
        <div className="atouts__items">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669139062/exercices_jl2elc.svg"
            alt=""
            className="atouts__items__img"
          />
          <p className="atouts__items__name">
          des exercices et ressources Téléchargeable
          </p>
        </div>
        <div className="atouts__items">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669139004/phone_d841zj.png"
            alt=""
            className="atouts__items__img"
          />
          <p className="atouts__items__name">
          La possibilité de reserver des postes à l’avance 
          </p>
        </div>
      </div>
  )
}

export default Atouts
