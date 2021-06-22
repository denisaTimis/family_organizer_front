import React from "react";
import axios from "axios";
import "./register.css"
import {Link} from "react-router-dom";
import username from "../../icons/userName.png";
import password from "../../icons/password.png";
import {ReactSession} from "react-client-session";

export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            user: ""
        }

        this.getUser=this.getUser.bind(this);
        this.onLogin=this.onLogin.bind(this);
    }

    getUser(e)
    {
        this.setState({
            user: e.target.value
        })
    }

    async onLogin()
    {
        let backUser = await axios.get("/users/" + this.state.user);
        ReactSession.set("user",{
            username: backUser.username,
            firstName: backUser.firstName,
            lastName: backUser.lastName,
            email: backUser.email,
            dob: backUser.dob,
            phoneNumber: backUser.phoneNumber,
            budget: backUser.budget
        })

    }
    render(){
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"py-5 row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <h4 className={"login-text"}>Welcome!</h4>
                        </div>
                    </div>
                    <div className={"py-3 row justify-content-center"}>
                        <div className={"col-4"}>
                        <div className={"input-group login-input-div"}>
                            <div className={"input-group-prepend"}>
                                <span className={"input-group-text login-icon-span"} id={"email-login"}><img className={"login-icons"} src={username}/></span>
                            </div>
                            <input type={"text"} className={"form-control login-input"} placeholder={"Username"} aria-describedby={"email-login"} onChange={this.getUser} />
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
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <a href={""}>Forgot password</a>
                        </div>
                    </div>
                    <div className={"py-3 row justify-content-center"}>
                        <div className="col-md-auto">
                        <input type={"button"} value={"Login"} className={"login-btn rounded"} onClick={this.onLogin}/>
                        </div>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <p>Don't have an account?</p>
                        </div>
                        <div className={"col-md-auto"}>
                            <Link to={"/signup"}>SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}