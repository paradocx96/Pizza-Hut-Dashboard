import React from "react";
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Feedback from "./components/pages/Feedback";


export default function App() {
  return (
    <div>
        <Router>
            <Switch>
                {/* HOMEPAGE */}
                <Route exact path="/" component={Login}/>

                {/* DASHBOARD */}
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/feedback" component={Feedback}/>


                <Redirect to="/"/>
            </Switch>
        </Router>
    </div>
  );
}
