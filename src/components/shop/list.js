import React from "react";
import "./list.css";
import axios from "axios";
import addlist from "../../icons/listadd.png";
import edit from "../../icons/list-edit.png";
import remove from "../../icons/list-delete.png";

export class List extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            shoppingList: [],
            inputContent: '',
            selectedIndex: 0,
            currentIndex: 0,
            fetchedUser: {},
            newItem: {},
        }

        this.onAdd=this.onAdd.bind(this);
        this.getUserInput=this.getUserInput.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.selectItem=this.selectItem.bind(this);
        this.getUserInputKey=this.getUserInputKey.bind(this);
        this.addElementToDB=this.addElementToDB.bind(this);
        this.getIndexOfElement=this.getIndexOfElement.bind(this);
    }

    //adds element to database
    addElementToDB(){
        axios.post('/product/new', {
            "type":this.props.itemType,
            "text":this.state.inputContent,
            "id":this.state.currentIndex
        })
    }
    //gets the index of clicked element
    getIndexOfElement(shoppingList, id)
    {
        for(let i=0; i<shoppingList.length; i++)
        {
            if(id==shoppingList[i].id)
            {
                return i;
            }
        }
    }
    // adds element to the list/db
    onAdd()
    {
        // add element to list
        let listItem ={type:this.props.itemType, text:this.state.inputContent, id:this.state.currentIndex};
        this.setState({
            shoppingList:[...this.state.shoppingList, listItem],
            inputContent: "",
            currentIndex: this.state.currentIndex + 1
        });
        this.addElementToDB();
    }

    // delete element from list/db
    onDelete(){
        //get element by text
        for( var i = 0; i < this.state.shoppingList.length; i++)
        {
            console.log(this.state.shoppingList[i].text);
            if ( this.state.shoppingList[i].text === this.state.selectedIndex) {

                this.state.shoppingList.splice(i, 1);
            }
        }
        this.setState({shoppingList: this.state.shoppingList});
        console.log(this.state.shoppingList);
        //delete item
        axios.delete("product/"+this.state.selectedIndex);
        console.log("product/"+this.state.selectedIndex);
    }

    selectItem(e)
    {
        this.setState({selectedIndex: e.target.id})
        console.log(e.target.id);
    }

    //gets input from user
    getUserInput(e)
    {
        this.setState({
            inputContent: e.target.value
        })
    }
    //adds element to list on ENTER key
    getUserInputKey(e){
        let listItem ={type:this.props.itemType, text:this.state.inputContent,id:this.state.currentIndex};
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            this.setState({
                shoppingList: [...this.state.shoppingList,listItem],
                inputContent: "",
                currentIndex: this.state.currentIndex + 1
            })
        }
        //this.addElementToDB();
    }

    //gets info about user and all the products in the shopping list
    componentDidMount(){
        //get user by username
        fetch('/users/Maria', {mode:'no-cors'})
            .then(res=>res.json())
            .then((data)=>{
                this.setState({
                    fetchedUser : data
                });
            });

        const fetchPosts = async () => {
            const products = await axios.get("/products/" + this.props.itemType);
            this.setState({
                shoppingList: products.data
            })
        };
        fetchPosts();
    }

    render(){
        return(
            <div className={"py-3 container list"}>
                <div className={"row"}>
                    <div className={"col-md-auto"}>
                        <strong>This months budget:</strong>
                    </div>
                    <div className={"col-md-auto"}>
                        <label>{this.state.fetchedUser.budget}</label>
                    </div>
                </div>
                <div className={"py-2 row"}>
                    <div className={"col-md-auto input-group"}>
                        <div className={"input-group-prepend"}>
                            <span className={"input-group-text list-span"}>
                                <input className={"list-image-btn"} type={"image"} src={remove} onClick={this.onDelete} />
                            </span>
                        </div>
                        <input className={"form-control list-input"} type={"text"} value={this.state.inputContent} onChange={this.getUserInput} onKeyUp={this.getUserInputKey} />
                        <div className={"input-group-append"}>
                            <span className={"input-group-text list-span"}>
                                <input className={"list-image-btn"} type={"image"} src={addlist} onClick={this.onAdd}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col list-notes"}>
                        <ul>
                            {this.state.shoppingList.map(product => (
                                <div>
                                    <div id={product.text} onClick={this.selectItem} className={"row"}>{product.text}</div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}