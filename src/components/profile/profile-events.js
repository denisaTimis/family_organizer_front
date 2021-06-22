import React from "react";
import "./profile.css";
import event from "../../icons/event.png";

export class ProfileEvents extends React.Component
{
    render(){
        return(
            <div className={"py-3 row justify-content-center"} >
                <div className={"input-group"}>
                    <div className={"input-group-prepend"}>
                        <span className={"input-group-text profile-span-icons"} ><img className={"profile-info-icons"} src={event}/></span>
                    </div>
                    <label style={{width: "150px",
                        textAlign: "start",
                        marginLeft:"20px",
                        outline: "0",
                        borderStyle:"solid",
                        borderWidth: "0 0 2px",
                        borderColor: "grey",
                        backgroundColor: "light grey",
                        color: "black"}}> Hall Meeting </label>
                </div>
            </div>
        );
    }
}