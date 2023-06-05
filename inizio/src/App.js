import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";  

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

function App() {
  const [theme, setTheme] = useState("light-mode");

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
    document.documentElement.className = theme;
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
