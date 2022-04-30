import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setAccountUsername,
  setUserEmail,
  setUserAccessToken,
  setRegion,
  setFullName,
  setUserId
} from "../../redux/userSlice";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.access_token);

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
        dispatch(setAccountUsername(response.data.user.username));
        dispatch(setUserEmail(response.data.user.email));
        dispatch(setRegion(response.data.user.region));
        dispatch(setFullName(response.data.user.name));
        dispatch(setUserAccessToken(response.data.token));
        dispatch(setUserId(response.data.user.id));
        navigate("/dashboard");
        if(response.status ===400){
          console.log(":jje")
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
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
      </form>
    </div>
  );
};

export default Login;
