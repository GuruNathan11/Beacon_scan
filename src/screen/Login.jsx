import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Replace with your actual API endpoint for user authentication
    const apiUrl = "https://elon-leave-z9ep.onrender.com/api/user/signin";

    // Data to send to the server
    const data = {
      username: username,
      password: password,
    };

    axios
      .post(apiUrl, data)
      .then((response) => {
        // Assuming your API sends a success message
        if (response.data.success) {
          // User is authenticated, you can perform redirection or set a state to indicate success.
          console.log(response.data.jwt);
          alert("success");
        } else {
          setError("Invalid username or password");
          alert(response.data);
        }
      })
      .catch((error) => {
        // setError("An error occurred while logging in");
        alert(response.data)
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
