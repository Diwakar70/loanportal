import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Pages/Loginpage/Login";
import Signup from "../Pages/Signuppage/Signup";


class ReactRouter extends React.Component {
 render() {
   return (<div>
   
    <Router> 
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
		  <Route path="/signup" component={Signup} />
        
        </Switch>
       </Router> 
    </div>
    );
  }
}

export default ReactRouter;