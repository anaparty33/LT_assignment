import React from "react";
import RegisterScreen from "./components/RegisterScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <RegisterScreen />
    </Router>
  );
}

export default App;
