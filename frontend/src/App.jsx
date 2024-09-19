import { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import "./reset.css";
import { data } from "./data";
import { language } from "./data";
import CardComics from "./components/Main/ComicsSection/CardComics";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [isRussian, setIsRussian] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/get-settings', { withCredentials: true })
      .then(response => {
        setDarkmode(response.data.darkmode);
        setIsRussian(response.data.isRussian);
      })
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  const toggleDarkmode = (checked) => {
    setDarkmode(checked);
    axios.post('http://localhost:5000/set-settings', { darkmode: checked, isRussian }, { withCredentials: true })
      .catch(error => console.error('Error setting darkmode:', error));
  };

  const toggleLanguage = () => {
    const newLanguage = !isRussian;
    setIsRussian(newLanguage);
    axios.post('http://localhost:5000/set-settings', { darkmode, isRussian: newLanguage }, { withCredentials: true })
      .catch(error => console.error('Error setting language:', error));
  };

  return (
    <div className={darkmode ? "dark-mode app-container" : "app-container"}>
      <NavBar
        darkmode={darkmode}
        toggleDarkmode={toggleDarkmode}
        isRussian={isRussian}
        toggleLanguage={toggleLanguage}
      />
      <main>
        <section className="title">
          <h1 className="title-h1">
            {isRussian ? "Мир комикc " : "World comics"}
          </h1>
          <p className="title-p">
            {isRussian ? language.russian : language.english}
          </p>
        </section>
        <h1 className="title">{isRussian ? "Новинки" : "New Releases"}</h1>
        <div className="card-content">
          {data.map((comic, index) => (
            <CardComics
              darkmode={darkmode}
              key={index}
              src={comic.src}
              genre={isRussian ? "Манхва" : "Manhwa"}
              title={isRussian ? comic.russian : comic.english}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
