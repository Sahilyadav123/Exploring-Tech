import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);    
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password})
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        id=""
        className="border-2 rounded-md mx-3 px-2 "
      />
      <input
        type="text"
        name=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id=""
        placeholder="password"
        className="border-2 rounded-md  mx-3 px-2"
      />
      <button onClick={handleSubmit} className="border-2 rounded-md bg-red-400 mx-3 px-2">Login</button>
    </div>
  );
}

export default Login;
