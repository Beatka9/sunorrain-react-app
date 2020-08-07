import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather city="Rimini" />
      <footer>
        <p>
          Opensource code by Beatka9 on{" "}
          <a
            className="App-link"
            href="https://github.com/Beatka9/sunorrain-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
