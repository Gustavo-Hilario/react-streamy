import React from "react";

import { Router, Route, Switch } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";

import Header from "./Header";

import history from "../history";

import "../App.css";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route
                        path="/streams/new"
                        exact
                        component={StreamCreate}
                    ></Route>
                    <Route
                        path="/streams/edit/:id"
                        exact
                        component={StreamEdit}
                    ></Route>
                    <Route
                        path="/streams/delete/:id"
                        exact
                        component={StreamDelete}
                    ></Route>
                    <Route
                        path="/streams/:id"
                        exact
                        component={StreamShow}
                    ></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
