import React from "react";
import {MemberIncome} from "./member-income";


export class FamilyIncome extends React.Component
{
    render(){
        return(
            <div className={"py-3 container"}>
                <div className={"py-2 row"}>
                    <p>Total income in a month:</p>
                </div>
                <div className={"py-2 row"}>
                    <div className={"row"}>
                        <p>See members income</p>
                    </div>
                    <div className={"row"}>
                        <MemberIncome/>
                        <MemberIncome/>
                        <MemberIncome/>
                        <MemberIncome/>
                    </div>
                </div>
            </div>
        );
    }
}