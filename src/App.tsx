import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePageComponent } from "./HomePage";
import { LoginComponent } from "./Login";
import { Store } from "redux";
import { ApplicationState } from "./store/configureStore";
interface ProviderProps {
  store: Store<ApplicationState>;
}

function App({ store }: ProviderProps) {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route path="/login" component={LoginComponent}></Route>
          <Route path="/" component={HomePageComponent}></Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
