import React from "react";
import "./profile.css";
import chores from "../../icons/userChores.png";

export class ProfileChores extends React.Component
{
    render(){
        return(
            <div className={"py-3 row justify-content-center"} >
                <div className={"input-group"}>
                    <div className={"input-group-prepend"}>
                        <span className={"input-group-text profile-span-icons"} ><img className={"profile-info-icons"} src={chores}/></span>
                    </div>
                    <label style={{width: "200px",
                        textAlign: "start",
                        marginLeft:"15px",
                        outline: "0",
                        borderStyle:"solid",
                        borderWidth: "0 0 2px",
                        borderColor: "grey",
                        backgroundColor: "light grey",
                        color: "black"}}> cook diner </label>
                </div>
            </div>
        );
    }
}