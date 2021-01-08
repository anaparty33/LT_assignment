import React from "react";
import RegisterScreen from "./components/RegisterScreen";
import LoginScreen from "./components/LoginScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfileScreen from "./components/UserProfileScreen";

function App() {
  return (
    <Router>
      <Route path="/" component={RegisterScreen} exact />
      <Route path="/login" component={LoginScreen} />
      <Route path="/profile" component={UserProfileScreen} />
    </Router>
  );
}

export default App;
