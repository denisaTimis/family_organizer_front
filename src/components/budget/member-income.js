import React from "react";
import profilePhoto from "../../icons/profilePhoto.png";
import edit from "../../icons/editTodo.png";

export class MemberIncome extends React.Component
{
    render(){
        return(
            <div className={"py-3 row"} style={{width: "230px"}}>
                <div className={"row"}>
                    <img src={profilePhoto} style={{width: "100px", height:"100px"}}/>
                </div>
                <div className={"py-2 row"} style={{width: "200px"}}>
                    <div className={"col"}>
                        <p>Income:</p>
                    </div>
                    <div className={"col"} style={{marginRight:"50px"}}>
                        <button className={"btn btn-light"} style={{width: "70px", height:"20px"}}>Edit</button>
                    </div>
                </div>
            </div>
        );
    }
}