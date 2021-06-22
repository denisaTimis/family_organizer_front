import React from "react";
import drinks from "../../icons/drinks.png";
import lactose from "../../icons/lactose.png";
import fruit from "../../icons/fruit.png";
import vegetable from "../../icons/tomato.png";
import snacks from "../../icons/snacks.png";
import household from "../../icons/household.png";
import meat from "../../icons/meat.png";
import wheat from "../../icons/wheat.png";
import {List} from "./list";

export class ShoppingList extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            click:false,
            itemType: ""
        }

        this.openNoteMeat = this.openNoteMeat.bind(this);
        this.openNoteLactose = this.openNoteLactose.bind(this);
        this.openNoteFruit= this.openNoteFruit.bind(this);
        this.openNoteVegetable = this.openNoteVegetable.bind(this);
        this.openNoteDrinks = this.openNoteDrinks.bind(this);
        this.openNoteSnacks = this.openNoteSnacks.bind(this);
        this.openNoteBase = this.openNoteBase.bind(this);
        this.openNoteHousehold = this.openNoteHousehold.bind(this);
    }

    //opens lists
    openNoteMeat() {
        this.setState({click: !this.state.click, itemType:"meat"});
    }
    openNoteLactose() {
        this.setState({click: !this.state.click, itemType:"lactose"});
    }
    openNoteFruit() {
        this.setState({click: !this.state.click, itemType:"fruit"});
    }
    openNoteVegetable() {
        this.setState({click: !this.state.click, itemType:"vegetable"});
    }
    openNoteDrinks() {
        this.setState({click: !this.state.click, itemType:"drinks"});
    }
    openNoteSnacks() {
        this.setState({click: !this.state.click, itemType:"snacks"});
    }
    openNoteBase() {
        this.setState({click: !this.state.click, itemType:"base"});
    }
    openNoteHousehold() {
        this.setState({click: !this.state.click, itemType:"household"});
    }

    render() {
        return(
            <div className="py-5 row container" style={{ marginLeft:"100px"}}>
                <div className={"py-2 col-md-auto"} style={{backgroundColor:"powderblue", width:"500px"}}>
                    <div className={" py-3 row justify-content-center shadow-sm rounded"}>
                        <div className={"col-md-auto"} style={{marginRight:"20px"}}>
                            <img src={meat} style={{width:"50px", height:"50px"}}/>
                        </div>
                        <div className={"col-md-auto rounded"} style={{backgroundColor:"aliceblue"}} onClick={this.openNoteMeat}>
                            <strong>MEAT</strong>
                            <p style={{fontSize:"10px"}}>Last updated on -date- by -name-</p>
                        </div>
                    </div>
                    <div className={" py-3 row justify-content-center shadow-sm rounded"}>
                        <div className={"col-md-auto"} style={{marginRight:"20px"}}>
                            <img src={lactose} style={{width:"50px", height:"50px"}}/>
                        </div>
                        <div className={"col-md-auto rounded"} style={{backgroundColor:"aliceblue"}} onClick={this.openNoteLactose}>
                            <strong>LACTOSE</strong>
                            <p style={{fontSize:"10px"}}>Last updated on -date- by -name-</p>
                        </div>
                    </div>
                    <div className={"py-3 row justify-content-center shadow-sm rounded"}>
                        <div className={"col-md-auto"} style={{marginRight:"20px"}}>
                            <img src={fruit} style={{width:"50px", height:"50px"}}/>
                        </div>
                        <div className={"col-md-auto rounded"} style={{backgroundColor:"aliceblue"}} onClick={this.openNoteFruit}>
                            <strong>FRUIT</strong>
                            <p style={{fontSize:"10px"}}>Last updated on -date- by -name-</p>
                        </div>
                    </div>
                    <div className={"py-3 row justify-content-center shadow-sm rounded"}>
                        <div className={"col-md-auto"} style={{marginRight:"20px"}}>
                            <img src={vegetable} style={{width:"50px", height:"50px"}}/>
                        </div>
                        <div className={"col-md-auto rounded"} style={{backgroundColor:"aliceblue"}} onClick={this.openNoteVegetable}>
                            <strong>VEGETABLES</strong>
                            <p style={{fontSize:"10px"}}>Last updated on -date- by -name-</p>
                        </div>
                    </div>
                    <div className={"py-3 row justify-content-center shadow-sm rounded"}>
                        <div className={"col-md-auto"} style={{marginRight:"20px"}}>
                            <img src={drinks} style={{width:"50px", height:"50px"}}/>
                        </div>
                        <div className={"col-md-auto rounded"} style={{backgroundColor:"aliceblue"}} onClick={this.openNoteDrinks}>
                            <strong>DRINKS</strong>
                            <p style={{fontSize:"10px"}}>Last updated on -date- by -name-</p>
                        </div>
                    </div>
                    <div className={"py-3 row justify-content-center shadow-sm rounded" }>
                        <div className={"col-md-auto"} style={{marginRight:"20px"}}>
                            <img src={snacks} style={{width:"50px", height:"50px"}}/>
                        </div>
                        <div className={"col-md-auto rounded"} style={{backgroundColor:"aliceblue"}} onClick={this.openNoteSnacks}>
                            <strong>SNACKS</strong>
                            <p style={{fontSize:"10px"}}>Last updated on -date- by -name-</p>
                        </div>
                    </div>
                    <div className={"py-3 row justify-content-center shadow-sm rounded"}>
                        <div className={"col-md-auto"} style={{marginRight:"20px"}}>
                            <img src={wheat} style={{width:"50px", height:"50px"}}/>
                        </div>
                        <div className={"col-md-auto rounded"} style={{backgroundColor:"aliceblue"}} onClick={this.openNoteBase}>
                            <strong>COOKING BASE</strong>
                            <p style={{fontSize:"10px"}}>Last updated on -date- by -name-</p>
                        </div>
                    </div>
                    <div className={"py-3 row justify-content-center shadow-sm rounded"}>
                        <div className={"col-md-auto"} style={{marginRight:"20px"}}>
                            <img src={household} style={{width:"50px", height:"50px"}}/>
                        </div>
                        <div className={"col-md-auto rounded"} style={{backgroundColor:"aliceblue"}} onClick={this.openNoteHousehold}>
                            <strong>HOUSEHOLD</strong>
                            <p style={{fontSize:"10px"}}>Last updated on -date- by -name-</p>
                        </div>
                    </div>
                </div>
                <div className={"col-md-auto "}>
                    {this.state.click
                        ?
                        <List itemType={this.state.itemType}/>
                        :
                        <div></div>
                    }

                </div>
            </div>
        );
    }
}