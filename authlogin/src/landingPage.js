// LoginForm.js
import React, { useState } from "react";
import "./App.css"; // Import the CSS file
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loginWithRedirect, isAuthenticated, user, isLoading, logout } =
    useAuth0();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="page-container">
      <form className="form-container" onSubmit={handleSubmit}>
        {isAuthenticated ? (
          <h1>Hi {user.name}..</h1>
        ) : (
          <h1>Hi User! Please Login for moving forward...</h1>
        )}

        {isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )}

        <br />
        {isAuthenticated ? (
          <button
            type="submit"
            className="form-button"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <>
            <button
              type="submit"
              className="form-button"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default LandingPage;
