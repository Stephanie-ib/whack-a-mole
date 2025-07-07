import React from "react";

const MoleHole = ({ active, onClick }) => {
  return (
    <div className={`hole ${active ? "active" : ""}`} onClick={onClick}>
      {active && (
        <div
          className="mole"
          style={{
            backgroundImage: `url('https://emojicdn.elk.sh/🐹')`,
          }}
        />
      )}
    </div>
  );
};

export default MoleHole;
