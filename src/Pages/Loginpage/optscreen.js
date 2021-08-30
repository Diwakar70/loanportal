import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../assets/custom.scss";
import { getAPIUrl } from "../../config";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            message: {}
        }

        
        //this.onSubmit = this.onSubmit.bind(this);

    };

   
    render() {
        const { message, fields } = this.state;
        return (
            <div>

<div class="row justify-content-center">
				
                <div class="col-4 " style={{marginTop:'40px',height:'550px',backgroundColor :'rgb(255 255 255 / 80%)'}}>
                <div class="pY-1 h-90">
                <div class="">
                <div class="pY-20 h-100">
                   
                    
                        <h4 class=" text-muted ">Please enter the OTP to verify your account</h4>
                        <h6 class="fw-300 c-grey-900 mB-40 d-flex justify-content-center">A OTP has been sent to *********</h6>
                        <form name="Login" >
                            <span className="text-danger">{message.error}</span>
                            <span className="text-success">{message.success}</span>
                            <div class="form-group">
                               
                               
                               <div class="d-flex justify-content-center">
                               <input id="partitioned" type="text" maxlength="4" />
                               </div>
                                
                            </div>
                            
                            <div class="form-group">
                                
                                <div class="peers ai-c jc-c fxw-nw mT-20">
                                    <div class="peer text-center">
                                        <Link to="/home" className="no-underline"> <button type="submit" className="btn btn-primary">Verify</button></Link>
                                    </div>
                                </div>
                                <div class="peers ai-c jc-c fxw-nw mT-20">
                                    <div className="form-group">
                                        <p className="text-muted text-center">Do not have an account?
                                    <Link to="/signup"> Sign Up!</Link>
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
export default Login;



