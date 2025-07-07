import React, { useEffect, useState } from "react";

const Club = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveClub = (e) => {
      setPosition({ x: e.pageX - 30, y: e.pageY - 30 });
    };

    const rotateClub = () => {
      const club = document.getElementById("club");
      club.style.transform = "rotate(-45deg)";
      setTimeout(() => {
        club.style.transform = "rotate(0deg)";
      }, 100);
    };

    window.addEventListener("mousemove", moveClub);
    window.addEventListener("click", rotateClub);

    return () => {
      window.removeEventListener("mousemove", moveClub);
      window.removeEventListener("click", rotateClub);
    };
  }, []);

  return (
    <div
      id="club"
      className="club"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default Club;
