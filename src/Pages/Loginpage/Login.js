import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/custom.scss";
import Logo from "../../assets/static/images/neptune.png"
class Login extends React.Component {  
   constructor() {
        super();
        this.state = {
            fields: {},
            message: {}
        }
        this.onSubmit = this.onSubmit.bind(this);
       
        
    };
    onSubmit(e) {
		console.log('venkat');
        
        e.preventDefault();
        if (this.validateForm()) {
        }
    }
    validateForm() {
        let fields = this.state.fields;
        let message = {};
        let formIsValid = true;
        
        if (!fields["Email"]) {
            formIsValid = false;
            message["Email"] = "Please enter email.";
            
        }
        else {
            if (fields["Email"].trim() == '') {
                formIsValid = false;
                message["Email"] = "Please enter email.";
            }
        }

        if (!fields["Password"]) {
            formIsValid = false;
            message["Password"] = "Please enter password.";
            
        }
        else {
            if (fields["Password"].trim() == '') {
                formIsValid = false;
                message["Password"] = "Please enter password.";
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
		
            <div>

                <div class="row justify-content-center">
				
  <div class="col-4 " style={{marginTop:'40px',height:'550px',backgroundColor :'rgb(255 255 255 / 80%)'}}>
  <div class="pY-1 h-90">
  <div class="">
  <div class="pY-20 h-100">
    <h4 class="fw-300 c-grey-900 mB-40 d-flex justify-content-center"><img style={{height: '50px'}} src={Logo}/></h4>
	
                        <form name="Login"  onSubmit={this.onSubmit}>                          
                            <div class="form-group">
                                <label htmlFor="Email" className="text-normal text-dark font-weight-normal formfield">Email address or username</label>
                                <input type="text" maxLength="100" className="form-control " name="Email" id="Email" value={fields.Email} placeholder="Your email address" autoFocus onChange={this.onChange} />
                                <small className="text-danger">{message.Email}</small> 
                            </div>
                            <div class="form-group">
                                <label htmlFor="Password" className="text-normal text-dark font-weight-normal">Password</label>
                                <input type="Password" maxLength="15" className="form-control " name="Password" id="Password" value={fields.Password} placeholder="Your password" onChange={this.onChange} />
                                <small className="text-danger">{message.Password}</small>
                            </div>
                            <div class="form-group">
                                <div class="peers ai-c jc-sb fxw-nw">
                                    <div class="peer">
                                        <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                                            <input className="peer" name="Remember" id="Remember" checked={fields.Remember} type="checkbox" onChange={this.onChange} />
                                            <label htmlFor="Remember" class=" peers peer-greed js-sb ai-c">
                                                <span class="peer peer-greed">Keep me signed in</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="peer">
                                        <Link to="/forgotpassword" className="forgot-btn pull-right"> Forgot password?</Link>
                                    </div>
                                </div>
                                <div class="peers ai-c jc-c fxw-nw mT-20">
                                    <div class="peer text-center">
                                         <button type="submit" className="btn btn-primary ">Login</button>
                                    </div>
                                </div>
                                <div class="peers ai-c jc-c fxw-nw mT-20">
                                    <div className="form-group">
                                        <p className="text-muted text-center">Not a member?
                                    <Link to="/signup">Create new Account </Link> <br></br>
                                    <Link to="/optscreen">Otp </Link>
                                        </p>
                                    </div>
                                </div>
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
export default Login  