import { useState } from "react";
import "./App.css";

function App() {
  const [cursorX, setCursorX] = useState(-50);
  const [cursorY, setCursorY] = useState(-50);

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div className="App">
      <h2>santhosg</h2>
      <div
        className="mouse"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
    </div>
  );
}

export default App;
