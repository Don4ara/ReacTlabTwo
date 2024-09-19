import './NavBar.css';
import { Switch } from 'antd';

// eslint-disable-next-line react/prop-types
export default function NavBar({ darkmode, toggleDarkmode, isRussian, toggleLanguage}) {

  return (
    <header className={darkmode ? "dark" : ""}>
      <div className="header-content">
        <div className="link-container">
          <h3 className='nav-logo'>Comics Land</h3>
          <ul className="nav-list-link">
            <li className="nav-item">
              <a href="" className="nav-link">
                {isRussian ? 'Главное' : 'Home'}
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                {isRussian ? 'Топы' : 'Tops'}
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                {isRussian ? 'Жанры' : 'Genres'}
              </a>
            </li>
          </ul>
        </div>
        <div className="button-header-language">
          <div className="header-container-button">
            <p className="header-p-darkmode">{isRussian ? 'Темная тема' : 'Darkmode'}</p>
            <Switch
              className="header-switch-button"
              checked={darkmode}
              onChange={toggleDarkmode}
            />
          </div>
          <div className="header-container-button">
            <p className="header-p-language">{isRussian ? 'Язык: Русский' : 'Language: English'}</p>
            <Switch
              className="header-switch-button"
              checked={isRussian}
              onChange={toggleLanguage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
