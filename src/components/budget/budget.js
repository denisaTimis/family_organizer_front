import React from "react";
import "./budget.css";
import {FamilyIncome} from "./family-income"
import {Tab,TabList,Tabs,TabPanel} from "react-tabs";

export class Budget extends React.Component
{
    render(){
        return(
            <div>
                <Tabs>
                    <TabList className={"py-3 tab-list"}>
                        <Tab className={"tab-list-item"}>Incomes</Tab>
                        <Tab className={"tab-list-item"}>Expenses</Tab>
                    </TabList>
                    <TabPanel>
                        <FamilyIncome/>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}