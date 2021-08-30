import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../assets/custom.scss";
import axios from "axios";
import Logo from "../../assets/static/images/neptune.png"
import { getAPIUrl } from "../../config";

class Signup extends Component {
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
		console.log('venkat');
        
        e.preventDefault();
        if (this.validateForm()) {
            const { fields, message } = this.state;

            this.setState({
                message: {}
            });

            let self = this;
           // axios.defaults.baseURL = getAPIUrl;
			axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            axios.post('/register', fields)
                .then(function (response) {
                    if (response.data.statusCode == 1) {
                        message["error"] = '';
                        message["success"] = response.data.status;
                        fields['Email'] = '';
                        fields['Password'] = '';
                        fields['FirstName'] = '';
                        fields['LastName'] = '';
                        fields['ConfirmPassword'] = '';
                        fields['Agree'] = '';
                        self.setState({ fields : fields});
                    }
                    else {
                        message["success"] = '';
                        message["error"] = response.data.status;
                        if (response.data.errorMessage) {
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

        if (!fields["FirstName"]) {
            formIsValid = false;
            message["FirstName"] = "Please enter first name.";
        }
        else {
            if (fields["FirstName"].trim() == '') {
                formIsValid = false;
                message["FirstName"] = "Please enter first name.";
            }
        }

        if (!fields["LastName"]) {
            formIsValid = false;
            message["LastName"] = "Please enter last name.";
        }
        else {
            if (fields["LastName"].trim() == '') {
                formIsValid = false;
                message["LastName"] = "Please enter last name.";
            }
        }

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

        if (!fields["Password"]) {
            formIsValid = false;
            message["Password"] = "Please enter password.";
        }

        if (typeof fields["Password"] !== "undefined") {
            if (fields["Password"].length < 8 || fields["Password"].length > 15) {
                formIsValid = false;
                message["Password"] = "Password should be between 8 to 15 characters.";
            }
            else {
                if (!fields["Password"].match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/)) {
                    formIsValid = false;
                    message["Password"] = "The password should have at least one uppercase, one numeric, one lowercase, and one special character.";
                }
            }
        }


        if (!fields["ConfirmPassword"] && typeof fields["Password"] !== "undefined") {
            formIsValid = false;
            message["ConfirmPassword"] = "Please enter confirm password.";
        }

        if (typeof fields["Password"] !== "undefined" && typeof fields["ConfirmPassword"] !== "undefined") {
            if (fields["Password"] != fields["ConfirmPassword"]) {
                formIsValid = false;
                message["ConfirmPassword"] = "Password and confirm password does not match.";
            }
        }

        if (formIsValid == true && (!fields["Agree"] || fields["Agree"] == false)) {
            formIsValid = false;
            message["Agree"] = "Please accept terms and conditions.";
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
  <div class="col-4 " style={{marginTop:'40px',height:'610px',backgroundColor :'rgb(255 255 255 / 80%)'}}>
  <div class="pY-1 h-90">
  <div class="">
  <div class="pY-1 h-100">
        
        <h4 class="fw-300 c-grey-900 mB-40 d-flex justify-content-center">Register</h4>
        <form name="ForgotPassword" onSubmit={this.onSubmit}>
        <span className="text-danger">{message.error}</span>
                                <span className="text-success">{message.success}</span>
          <div class="form-group">   
            <label htmlFor="FirstName" className="text-normal text-dark font-weight-normal">Full Name</label>
            <div>
            <input type="text" maxLength="25" className="form-control" name="FirstName" id="FirstName" value={fields.FirstName} placeholder="Enter fullName" autoFocus onChange={this.onChange} required="" />
            <small className="text-danger">{message.FirstName}</small> 
            </div>  
          </div>
          <div class="form-group">
            <label htmlFor="LastName" className="text-normal text-dark font-weight-normal">User Name</label>
            <div>
            <input type="text" maxLength="25" className="form-control" name="LastName" id="LastName" value={fields.LastName} placeholder="Enter userName" onChange={this.onChange} required="" />
            <small className="text-danger">{message.LastName}</small>
            </div>
          </div>
          <div class="form-group">
            <label htmlFor="Email" className="text-normal text-dark font-weight-normal">Email</label>
            <input type="text" maxLength="100" className="form-control" name="Email" id="Email" value={fields.Email} placeholder="Enter email address" onChange={this.onChange} required="" />
            <small className="text-danger">{message.Email}</small>
          </div>
          <div class="form-group">
                <label htmlFor="Password" className="text-normal text-dark font-weight-normal">Password</label>
                <div>
                    <input type="Password" maxLength="15" className="form-control" name="Password" value={fields.Password} id="Password" placeholder="Enter password" onChange={this.onChange} required="" />
                    <small className="text-danger">{message.Password}</small>
                </div>
          </div>
          <div class="form-group">
                 <label htmlFor="ConfirmPassword" className="text-normal text-dark font-weight-normal">Confirm Password</label>
                <div>
                <input type="password" maxLength="15" className="form-control" name="ConfirmPassword" value={fields.ConfirmPassword} id="ConfirmPassword" placeholder="Confirm password" onChange={this.onChange} required="" />
                <small className="text-danger">{message.ConfirmPassword}</small>
                </div>
          </div>
         
          <div>
            <small className="text-danger">{message.Agree}</small>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Create Account</button> &nbsp;&nbsp;
			 <button type="submit" className="btn btn-danger">Close</button> &nbsp;&nbsp;Already have an account? <Link to="/"> Sign In!</Link>
			  <p className="text-muted text-center">
               
                </p>
          </div>
		  
          <div className="form-group">
               
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
export default Signup;