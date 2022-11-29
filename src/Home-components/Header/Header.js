import "./Header.css";
import { RiDownloadCloud2Line } from "react-icons/ri";

function Header() {
  return (
    <>
      <div className="title">
        <div className="intro__text">
          <p className="big__title">
            BIENVENU à la première école numerique africaine
          </p>
          <p className="small__description">
            Work & Yamo à travers sa vision innovante , vous guarantit un accès
            rapide aux marchés nationaux et internationaux de l'emploi
          </p>
          <div className="buttons">
            <button class="button-1" role="button">
              Get Started
            </button>
            <button class="button-3" role="button">
              <RiDownloadCloud2Line size={15} />
            </button>
            <p className="caption">Télechargez l'application </p>
          </div>
        </div>
      </div>
      <div className="images">
        <div className="intro__image">
          <img
            src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669193215/blob_1_mazllx.svg"
            alt="etudiant work et yamo"
            className="worker"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
