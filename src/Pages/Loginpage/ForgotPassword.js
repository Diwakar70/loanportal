import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../assets/custom.scss";
import axios from "axios";
import { getAPIUrl } from "../../config";

class ForgotPassword extends Component {

    constructor() {
        super();
        this.state = {
            fields: {},
            message: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };

    onChange(e) {
        let fields = this.state.fields;
        let message = this.state.message;
        fields[e.target.name] = (e.target.type == "checkbox") ? e.target.checked : e.target.value;
        message[e.target.name] = e.target.value.trim() ? '' : message[e.target.name];

        this.setState({
            fields,
            message
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            const { message, fields } = this.state;

            let self = this;
            self.setState({
                message: {}
            });
            axios.defaults.baseURL = getAPIUrl;
            axios.get('/Account/ForgotPassword?Email=' + fields["Email"])
                .then(function (response) {
                    if (response.data.statusCode == 1) {
                        message["error"]  = '';
                        message["success"] = response.data.status;
                        fields["Email"] = '';
                        self.setState({
                            fields: fields
                        });
                    }
                    else {
                        message["success"]  = '';
                        message["error"] = response.data.status;
                        if (!response.data.status) {
                            message["error"] = response.data.errorMessage;
                        }
                    }
                    self.setState({
                        message : message
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    validateForm() {
        let fields = this.state.fields;
        let message = {};
        let formIsValid = true;

        if (!fields["Email"]) {
            formIsValid = false;
            message["Email"] = "Please enter email address.";
        }else {
            if (fields["Email"].trim() == '') {
                formIsValid = false;
                message["Email"] = "Please enter email address.";
            }
        }

        if (typeof fields["Email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
            if (!pattern.test(fields["Email"])) {
                formIsValid = false;
                message["Email"] = "Please enter valid email address.";
            }
        }

        this.setState({
            message: message
        });
        return formIsValid;
    }

    render() {
        const { message, fields } = this.state;
        return (
      <div >
       <div class="row justify-content-center">
				
                <div class="col-4 " style={{marginTop:'40px',height:'550px',backgroundColor :'rgb(255 255 255 / 80%)'}}>
                <div class="pY-1 h-90">
                <div class="">
                <div class="pY-20 h-100">
      
        <h4 class="d-flex justify-content-center">Password Reset</h4>
        <hr></hr>
        <p className="text-muted text-center">
            <small>Enter your <b>username</b> or the <b>email address</b> that you need to register.We will send you an email with your username and a link to reset your password.</small>
        </p>
        <form name="ForgotPassword" onSubmit={this.onSubmit}>
          <div class="form-group">
            <label htmlFor="Email" className="font-weight-normal">Email address or username</label>
            <input type="text" maxLength="100" className="form-control" name="Email" id="Email" value={fields.Email} placeholder="Enter email address" autoFocus onChange={this.onChange} />
            <small className="text-danger">{message.Email}</small>
          </div> 
          <div className="form-group d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="submit" className="btn btn-danger" style={{marginLeft:'40px'}}>Cancel</button>
          </div> 
        <div className="form-group clearfix">
            <Link to="/" className="pull-left"> Return to Login</Link>
            <Link to="/signup" className="pull-right"> Sign Up!</Link>
        </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
             
        );
    }
}
export default ForgotPassword;