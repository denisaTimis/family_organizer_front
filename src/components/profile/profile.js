import React from "react";
import "./profile.css";
import {ReactSession} from "react-client-session";
import {ProfileChores} from "./profile-chores";
import {ProfileEvents} from "./profile-events";
import {ProfilePictures} from "./profile-pictures";
import profilePhoto from "../../icons/profilePhoto.png";
import userName from "../../icons/userName.png";
import birthday from "../../icons/b-day.png";
import phoneNumber from "../../icons/phoneNumber.png";
import email from "../../icons/email.png";

export class Profile extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            chores: [],
            edit:"false",
            fetchedUser:{}
        }
        this.appendChores=this.appendChores.bind(this);
    }
    // adds chores to the chores list
    appendChores(){
        this.setState({
            chores: [...this.state.chores,
                <ProfileChores/>]});
    }
    render(){
        return(
            <div className={"py-5 container"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-md-auto profile-photo-div shadow-lg"}>
                        <div className={"row justify-content-center "}>
                            <input type={"image"} src={profilePhoto}/>
                        </div>
                        <div className={"row justify-content-center profile-events-div"}>
                            <strong>Events</strong>
                            <ProfileEvents/>
                        </div>
                    </div>
                    <div className={"col-md-auto"}>
                        <div className={"row "}>
                            <h4>{ReactSession.get("user").firstName} {ReactSession.get("user").lastName}</h4>
                        </div>
                        <div className={"py-3 row "}>
                            <div className={"input-group"}>
                                <div className={"input-group-prepend"}>
                                    <span className={"input-group-text profile-span-icons"} ><img className={"profile-info-icons"} src={userName}/></span>
                                </div>
                                <label className={"profile-info"}>{this.state.fetchedUser.firstName} {this.state.fetchedUser.lastName}</label>
                            </div>
                        </div>
                        <div className={"py-3 row "}>
                            <div className={"input-group"}>
                                <div className={"input-group-prepend"}>
                                    <span className={"input-group-text profile-span-icons"} ><img className={"profile-info-icons"} src={birthday}/></span>
                                </div>
                                <label className={"profile-info"} >{this.state.fetchedUser.dob}</label>
                            </div>
                        </div>
                        <div className={"py-3 row "}>
                            <div className={"input-group"}>
                                <div className={"input-group-prepend"}>
                                    <span className={"input-group-text profile-span-icons"} ><img className={"profile-info-icons"} src={email}/></span>
                                </div>
                                <label className={"profile-info"} >{this.state.fetchedUser.email}</label>
                            </div>
                        </div>
                        <div className={"py-3 row "}>
                            <div className={"input-group"}>
                                <div className={"input-group-prepend"}>
                                    <span className={"input-group-text profile-span-icons"} ><img className={"profile-info-icons"} src={phoneNumber}/></span>
                                </div>
                                <label className={"profile-info"} >{this.state.fetchedUser.phoneNumber}</label>
                            </div>
                        </div>
                        <div className={"py-3 row "}>
                            <ProfilePictures/>
                        </div>
                    </div>
                    <div className={"col-md-auto profile-chores-div"}>
                        <strong>Chores</strong>
                        <ProfileChores/>
                    </div>
                </div>
            </div>
        );
    }
}