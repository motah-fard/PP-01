
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Chats = () => {
  // type AnyArray = any[];
  interface AnyArray {
    [index: number]: any;
  }
  interface User {
    [key: string]: any;
  }
  const [chats, setChats] = useState( );

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), () => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, []);

  const handleSelect = () => {
    dispatch({ type: "CHANGE_USER", payload:  });
  };

  return (
    <div className="chats">
      { (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
           
        <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt=""
          />
          <div className="userChatInfo">
          <span>Jane</span>
            <p>hello</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;