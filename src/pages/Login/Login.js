import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccountUsername, setUserEmail } from "../../redux/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    var data = JSON.stringify({
      username,
      password
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/users/login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(config)
      .then(function(response) {
        console.log(response.data)
        // localStorage.setItem("my_user_token", response.data.token);
        // dispatch(setAccountUsername(response.data.username));
        // dispatch(setUserEmail(response.data.email));
        // dispatch(setAccountUsername(response.data.username));
        // dispatch(setAccountUsername(response.data.username));
        // navigate("/home");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="login-wrapper">
      <form onSubmit={e => handleSubmit(e)}>
        <input
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          type="text"
        />
        <br />
        <input
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <br />
        <button className="login-button">login</button>
        <a href="/register" className="create-account">
          create an account
        </a>
      </form>
    </div>
  );
};

export default Login;
