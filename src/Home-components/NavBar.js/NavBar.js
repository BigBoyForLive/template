import "./Navbar.css";
function NavBar() {
  return (
    <div className="item__container">
      <div className="navigation__item logo">
        <img
          src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1669139049/work_yamo_cut3g4.svg"
          alt="Paris"
          className="logo__image"
        ></img>
      </div>

      <div className="navigation__item">
        <ul className="navigation">
          <li className="item">
            <a className="navigation" href="#home">
              Acceuil
            </a>
          </li>
          <li className="item">
            <a className="navigation " href="#home">
              Blog
            </a>
          </li>
          <li className="item">
            <a className="navigation" href="#home">
              Reservation
            </a>
          </li>
          <li className="item">
            <a className="navigation" href="#home">
              Actualité
            </a>
          </li>
        </ul>
      </div>
      <div className="navigation__item logo">
        <button class="button-2" role="button">
          Connexion
        </button>
        <button class="button-1" role="button">
          Inscription
        </button>
      </div>
    </div>
  );
}

export default NavBar;
