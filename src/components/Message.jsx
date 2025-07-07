import React from "react";

const Message = ({ text, score, highScore }) => {
  const className =
    score === highScore && score > 0 ? "message success" : "message";
  return <p className={className}>{text}</p>;
};

export default Message;
