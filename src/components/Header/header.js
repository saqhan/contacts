import React from "react";

import "./header.css";

const Header = ({switchStyle, darkTheme, userName }) => {  
  return (
    <div className="chat-header">
      <div className="left-header">Hi, {userName}</div>
      <div className="right-header">
        <button onClick={switchStyle}>
          {darkTheme ? "дневной режим" : "ночной режим"}
        </button>
      </div>
    </div>
  );
};

export default Header;
