import React from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    loginEmail: "",
    loginPassword: "",
    confirmPassword: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const login = async (e) => {
    e.preventDefault();
    const email = user.loginEmail;
    const password = user.password;
    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    });
    
    const data = await res.json();
    console.log("zzz");
    if (res.status === 200) {
      alert(data.message);
    } else alert(data.message);
  };

  const register = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = user;
    console.log(user);
    const res = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    });
    const data = await res.json();

    if (res.status === 201 || res.status === 403) {
      alert(data.message);
      //   navigate("/login");
    } else alert(data.error);
  };
  return (
    <>
      <div id="cover">
        <div className="same" id="lin">
          <div>Login</div>
          <input
            type="email"
            value={user.loginEmail}
            onChange={handleChange}
            name="loginEmail"
            placeholder="mail@email.com"
          />
          <input
            type="password"
            value={user.loginPassword}
            onChange={handleChange}
            name="loginPassword"
          />
          <button onClick={login}>Login</button>
        </div>

        <div className="same" id="sup">
          <div>Sign-Up</div>
          <input
            value={user.name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Ent your name"
          />
          <input
            type="email"
            value={user.email}
            onChange={handleChange}
            name="email"
            placeholder="mail@email.com"
          />
          <input
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            placeholder="password"
          />
          <input
            type="password"
            value={user.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirm password"
          />
          <button onClick={register}>Sign-Up</button>
        </div>
      </div>
    </>
  );
}
