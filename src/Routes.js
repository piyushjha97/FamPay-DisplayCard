import React, { Component }      from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home                      from "./components/Home";
import history                   from './history';
import ImageCardDetail           from './components/ImageCardDetail';
import ClickedComponent          from './components/ClickedComponent';
import WheelPage                 from './components/WheelPage';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/"    exact  strict component={Home} />
                    <Route path="/next" exact strict component={ImageCardDetail}/>
                    <Route path="/clicked" exact strict component={ClickedComponent}/>
                    <Route path="/wheelpage" exact strict component={WheelPage}/>
                </Switch>
            </Router>
        )
    }
}