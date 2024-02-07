import React, { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

const Message = ({}) => {
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  const ref = useRef();

  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  return (
    <div
      // ref={ref}
      // `message ${message.senderId === currentUser.uid && "owner"}`
      className="message"
    >
      <div className="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello my name is Payam</p>
        {/* {message.img && <img src={message.img} alt="" />} */}
      </div>
    </div>
  );
};

export default Message;

// src={
//   message.senderId === currentUser.uid
//     ? currentUser.photoURL
//     : data.user.photoURL
// }
