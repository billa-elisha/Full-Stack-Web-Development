// export default App;
import React, { useState, createContext } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

export const myContext = createContext();
function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const myName = (event) => {
    setName(event.target.value);
  };
  const myColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <myContext.Provider value={{ name, color }}>
      <>
        <Navbar />
        <form>
          <input
            type="text"
            onChange={myName}
            placeholder="Enter your name"
            value={name}
          />
          <input
            type="text"
            onChange={myColor}
            placeholder="Enter your colors"
            value={color}
          />
        </form>
        <HeroSection />
      </>
    </myContext.Provider>
  );
}
export default App;
