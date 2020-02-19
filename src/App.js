import React, { useState } from "react";
import "./styles.css";
import Button from "./Button";
import WindowPortal from "./WindowPortal";
import Nav from "./Header";

export default function App() {
  const [showWindow, setShowWindow] = useState(false);
  const openWindowHandler = () => {
    setShowWindow(true);
  };
  const closeWindowHandler = () => {
    setShowWindow(false);
  };
  return (
    <div className="App">
      <button primary onClick={openWindowHandler}>
        Primary
      </button>
      {showWindow && (
        <WindowPortal onClick={closeWindowHandler}>
          <Button primary onClick={closeWindowHandler}>
            Click me to close
          </Button>
          <Nav>
            <ul
              style={{
                listStyleType: "none"
              }}
            >
              <li>Home</li>
              <li>Home1</li>
              <li>Home2</li>
            </ul>
          </Nav>
        </WindowPortal>
      )}
    </div>
  );
}
