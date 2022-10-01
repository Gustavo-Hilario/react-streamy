import React from "react";
import ReactDom from "react-dom";

import App from "./components/App";
import reducers from "./reducers";

// Implementing Redux into the React application
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
