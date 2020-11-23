import React from "react";
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import "./styles.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
    <Router>
    <Navbar/>
      <Switch>
     <Route path="/signup" component ={SignUp}/>
     <Route path="/login" component ={Login}/>


     </Switch>
     
    </Router>
   
    </div>
  );
}
