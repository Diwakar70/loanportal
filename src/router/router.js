import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Pages/Loginpage/Login";
import Signup from "../Pages/Signuppage/Signup";
import ForgotPassword from "../Pages/Loginpage/ForgotPassword";
import optscreen from "../Pages/Loginpage/optscreen";


class ReactRouter extends React.Component {
 render() {
   return (<div>
   
    <Router> 
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
		  <Route path="/signup" component={Signup} />
         <Route path="/forgotpassword" component={ForgotPassword} />
         <Route path="/optscreen" component={optscreen} />
        </Switch>
       </Router> 
    </div>
    );
  }
}

export default ReactRouter;