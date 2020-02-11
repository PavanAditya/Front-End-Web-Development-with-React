import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/MainComponent";
import { DISHES } from "./shared/dishes";

import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
