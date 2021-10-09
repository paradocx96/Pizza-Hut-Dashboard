import React from "react";
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Feedback from "./components/pages/Feedback";
import ViewAllPizzas from "./components/pages/pizza/ViewAllPizzas";
import AddPizza from "./components/pages/pizza/AddPizza";


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


                <Route path="/pizza/viewAll" component={ViewAllPizzas}/>
                <Route path="/pizza/addPizza" component={AddPizza}/>


                <Redirect to="/"/>
            </Switch>
        </Router>
    </div>
  );
}
