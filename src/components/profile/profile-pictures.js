import React from "react";
import "./profile.css";
import profilePhoto from "../../icons/profilePhoto.png";

export class ProfilePictures extends React.Component
{
    render(){
        return(
            <div className={"py-5 container"} style={{marginRight:"-30px"}}>
                <div className={"row justify-content-start"} style={{width:"550px", height:"100px"}} >
                    <div className={"col-md-auto"} style={{width:"150px", height:"80px"}}>
                        <input type={"image"} src={profilePhoto}/>
                    </div>
                    <div className={"col-md-auto"} style={{width:"150px", height:"80px"}}>
                        <input type={"image"} src={profilePhoto}/>
                    </div>
                    <div className={"col-md-auto"} style={{width:"150px", height:"80px"}}>
                        <input type={"image"} src={profilePhoto}/>
                    </div>
                    <div className={"col-md-auto"} style={{width:"150px", height:"80px"}}>
                        <input type={"image"} src={profilePhoto}/>
                    </div>
                </div>
            </div>
        );
    }
}