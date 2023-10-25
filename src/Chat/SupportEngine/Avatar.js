import React, { useState } from "react";
import { styles } from "./styles";

const Avatar = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={props.style}>
      <div
        className="transition-3"
        style={{ ...styles.avatarHello, ...{ opacity: hovered ? "1" : "0" } }}
      >
        Chat Support
      </div>

      <div
        className="transition-3"
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        onClick={() => props.onClick && props.onClick()}
        style={{
          ...styles.chatWithMeButton, //#008000	//#f9f0ff // #f9f0ff
          ...{ border: hovered ? "1px solid #f9f0ff" : "4px solid #008000" },
        }}
      />
    </div>
  );
};

export default Avatar;
