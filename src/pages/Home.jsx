import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLevelSelect = (level) => {
    navigate(`/game?level=${level}`);
  };

  return (
    <div className="home-container">
      <h1>Whack-a-Mole 🐹</h1>
      <p>Select a difficulty level:</p>
      <div className="level-buttons">
        <button onClick={() => handleLevelSelect("easy")}>Easy</button>
        <button onClick={() => handleLevelSelect("medium")}>Medium</button>
        <button onClick={() => handleLevelSelect("hard")}>Hard</button>
      </div>
    </div>
  );
};

export default Home;
