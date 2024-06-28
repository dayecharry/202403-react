import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./scss/index.css";
import rootReducer from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
