import React, { useContext } from "react";
// import {signOut} from "firebase/auth"
// import { auth } from '../firebase'
// import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  // const {currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
          alt=""
        />
        <span>Jhon</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
