// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react"; // Import Auth0Provider

import LoginForm from "./login";
import LandingPage from "./landingPage";

const App = () => {
  return (
    <Auth0Provider
      domain="dev-webindia.us.auth0.com"
      clientId="JMDl15rDHfngfOnH3khsftZes8VLfzVz"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {/* <LoginForm /> */}
      <LandingPage />
    </Auth0Provider>
  );
};

export default App;
