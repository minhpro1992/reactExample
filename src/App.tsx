import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomePageComponent } from "./HomePage";
import { LoginComponent } from "./Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginComponent}></Route>
        <Route path="/" component={HomePageComponent}></Route>
      </Switch>
    </div>
  );
}

export default App;
