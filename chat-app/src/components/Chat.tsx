import React, { useContext } from "react";
import Cam from "../img/brown_colored_image_2.png";
import Add from "../img/brown_colored_image_3.png";
import More from "../img/brown_colored_image_5.png";
import Messages from "./Messages";
import Input from "./Input";


const Chat = () => {


  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
