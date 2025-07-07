import React, { useState, useRef, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import MoleHole from "../components/MoleHole";
import Message from "../components/Message";
import Club from "../components/Club";

const holeCount = 9;

const speedMap = {
  easy: 1200,
  medium: 800,
  hard: 500,
};

const Game = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const level = params.get("level") || "medium";
  const speed = speedMap[level];

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [activeHole, setActiveHole] = useState(null);
  const [message, setMessage] = useState("Click Start to play!");
  const [highScore, setHighScore] = useState(0);

  const moleTimer = useRef(null);
  const countdownTimer = useRef(null);
  const scoreRef = useRef(0);

  const highScoreKey = `whackHighScore_${level}`;

  useEffect(() => {
    const saved = Number(localStorage.getItem(highScoreKey)) || 0;
    setHighScore(saved);
  }, [level]);

  const sounds = [
    new Audio("/sounds/click.wav"),
    new Audio("/sounds/type_sound1.wav"),
    new Audio("/sounds/type_sound2.wav"),
  ];

  const playSound = () => {
    const random = Math.floor(Math.random() * sounds.length);
    const sfx = sounds[random];
    sfx.currentTime = 0;
    sfx.play();
  };

  const startTimers = () => {
    moleTimer.current = setInterval(() => {
      const random = Math.floor(Math.random() * holeCount);
      setActiveHole(random);
    }, speed);

    countdownTimer.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearTimers();
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const clearTimers = () => {
    clearInterval(moleTimer.current);
    clearInterval(countdownTimer.current);
  };

  const startGame = () => {
    setScore(0);
    scoreRef.current = 0;
    setTime(30);
    setGameStarted(true);
    setMessage("Game started! Whack the moles!");
    startTimers();
  };

  const restartGame = () => {
    clearTimers();
    setScore(0);
    scoreRef.current = 0;
    setTime(30);
    setActiveHole(null);
    setGameStarted(true);
    setMessage("Game restarted! Whack the moles!");
    startTimers();
  };

  const endGame = () => {
    setGameStarted(false);
    setActiveHole(null);

    if (scoreRef.current > highScore) {
      localStorage.setItem(highScoreKey, scoreRef.current);
      setHighScore(scoreRef.current);
      setMessage(`🎉 New High Score: ${scoreRef.current}!`);
    } else {
      setMessage(`⏱️ Time's up! You scored ${scoreRef.current}`);
    }
  };

  const handleHit = (index) => {
    playSound();
    if (index === activeHole) {
      setScore((prev) => {
        const updated = prev + 1;
        scoreRef.current = updated;
        return updated;
      });
      setActiveHole(null);
    }
  };

  return (
    <div className="game-container">
      {/* Back button always visible */}
      <button onClick={() => navigate("/")} className="back-btn">⬅</button>

      <h1>Whack-a-Mole 🐹</h1>

      <div className="scoreboard">
        <div>⏱️ Time: {time}s</div>
        <div>🎯 Score: {score}</div>
        <div>🏆 High Score: {highScore}</div>
      </div>

      <Message text={message} score={score} highScore={highScore} />

      <div className="grid">
        {Array.from({ length: holeCount }).map((_, index) => (
          <MoleHole
            key={index}
            index={index}
            active={index === activeHole}
            onClick={() => handleHit(index)}
          />
        ))}
      </div>

      {!gameStarted && time === 30 && (
        <button onClick={startGame} className="img-button">
          <img src="/images/play-solid.svg" alt="Start" />
        </button>
      )}

      {gameStarted && (
        <button onClick={restartGame} className="img-button">
          <img src="/images/clock-rotate-left-solid.svg" alt="Restart" />
        </button>
      )}

      {gameStarted && <Club />}
    </div>
  );
};

export default Game;
