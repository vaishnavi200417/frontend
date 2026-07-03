import { useState } from "react";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter Username and Password");
      return;
    }
    
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Invalid Username or Password."
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          username: username,
          password: password,
        }
      );

      if (response.data.success) {
        alert("Login Successful");

        localStorage.setItem("user", JSON.stringify(response.data.user));

        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server not responding");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3>Login</h3>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="forgot">Forgot Password?</p>
      </div>
    </div>
  );
}

export default Login;