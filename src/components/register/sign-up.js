import React from "react";
import "./register.css"
import email from "../../icons/email.png";
import password from "../../icons/password.png";
import username from "../../icons/userName.png";
import {Link} from "react-router-dom";

export class SignUp extends React.Component{
    render(){
        return(
            <div className={"container"}>
                <div className={"py-5 row justify-content-center"}>
                    <div className={"col-md-auto"}>
                        <h4 className={"login-text"}>Join us now!</h4>
                    </div>
                </div>
                <div className={"py-3 row justify-content-center"}>
                    <div className="col-4">
                    <div className={"input-group login-input-div"}>
                        <div className={"input-group-prepend"}>
                            <span className={"input-group-text login-icon-span"} id={"email-login"}><img className={"login-icons"} src={email}/></span>
                        </div>
                        <input type={"text"} className={"form-control login-input"} placeholder={"Email"} aria-describedby={"email-login"}/>
                    </div>
                    </div>
                </div>
                <div className={"py-3 row justify-content-center"}>
                    <div className="col-4">
                    <div className={"input-group login-input-div"}>
                        <div className={"input-group-prepend"}>
                            <span className={"input-group-text login-icon-span"} id={"email-login"}><img className={"login-icons"} src={username}/></span>
                        </div>
                        <input type={"text"} className={"form-control login-input"} placeholder={"Username"} aria-describedby={"email-login"}/>
                    </div>
                    </div>
                </div>
                <div className={"py-3 row justify-content-center"}>
                    <div className="col-4">
                    <div className={"input-group login-input-div"}>
                        <div className={"input-group-prepend"}>
                            <span className={"input-group-text login-icon-span"} id={"password-login"}><img className={"login-icons"} src={password}/></span>
                        </div>
                        <input type={"text"} className={"form-control login-input"} placeholder={"Password"} aria-describedby={"password-login"}/>
                    </div>
                    </div>
                </div>
                <div className={"py-3 row justify-content-center"}>
                    <div className="col-md-auto">
                    <input type={"button"} value={"SignUp"} className={"login-btn rounded"}/>
                    </div>
                </div>
                <div className={"row justify-content-center"}>
                    <div className={"col-md-auto"}>
                        <p>Already have an account?</p>
                    </div>
                    <div className={"col-md-auto"}>
                        <Link to={"/login"}>Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}