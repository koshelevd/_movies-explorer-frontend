import { Link } from 'react-router-dom';

import logo from '../../images/header-logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header section page__header">
      <Link to="/" className="header__link">
        <img src={logo} alt="Логотип проекта" className="header__logo smoothly" />
      </Link>
      <nav className="header__menu">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/sign-up" className="link smoothly">
              Регистрация
            </Link>
          </li>
          <li className="header__item">
            <Link to="/sign-in" className="link header__button smoothly">
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
