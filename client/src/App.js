import React from "react";
import RegForm from "./components/RegForm";
import UserData from "./components/UserData";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <RegForm {...props} />} />
        <Route path="/data" component={UserData} />
      </div>
    </Router>
  );
}

export default App;
