import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";  


//Funzione che se presente 'Theme' nel localStorage(dati salvati in locale nel browser)
const getFromLocalStorage = () => {
  if(localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  else {
    return "light-mode";
  }
}


// returna il suo valore o di default return 'light-mode'

function App() {
  const [theme, setTheme] = useState(getFromLocalStorage());

  // funzione che cambia tema a seconda del suo valore
  const changeTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    }
    else {
      setTheme("light-mode");
    }
  }

  // al mutare del theme state, attacca una classe al nostro HTML TAG
  useEffect(() => {
    // attacco la classe
    document.documentElement.className = theme;

    // inserisco il valore che ho cambiato all'interno del localStorage
    // accetta come primo parametro il nome che voglio associare a questa chiave, 
    // ovvero "theme", come secondo parametro, visto che deve essere una stringa, 
    // e gli passo theme senza le virgolette perché è la variabile che ho riempito con la
    // stringa per settare setTheme, ovvero, a seconda dei casi, "dark-mode" o "light-mode"
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={changeTheme}>
          Cambia
        </button>
        <section className="article-section">
          {
            data.map(el => <Articolo key={el.id} {...el}/>)
          }
        </section>
      </div>
    </section>
  );
}

export default App;
