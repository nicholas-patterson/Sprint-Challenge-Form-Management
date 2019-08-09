import React from "react";
import RegForm from "./components/RegForm";
import UserData from "./components/UserData";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={RegForm} />
      <Route exact path="/data" component={UserData} />
    </div>
  );
}

export default App;
