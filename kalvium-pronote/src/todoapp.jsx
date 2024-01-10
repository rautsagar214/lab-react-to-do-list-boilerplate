import React from "react";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import './index.css'

export default class Todoapp extends React.Component{
    constructor(){
        super();
        this.state = {
            textValue:"",
            todolist:[]
        }
    }
    render(){
        let {textValue,todolist}=this.state;
        let handleChange = (event)=>{
            console.log(event.target.value)
            this.setState({textValue:event.target.value})
        }

        let handleClick =()=>{
            this.setState({todolist:[...todolist,textValue]})
            this.setState({textValue:""})
        }
  
        let handleUpdate = (index)=>{
            let newValue = prompt("new value")
            let updatedArr = todolist.map((el,i)=>{
                if(i==index){
                    return newValue
                
                }
                return el;
            })
            console.log(updatedArr,todolist)
            this.setState({todolist:updatedArr})
        }

        let handleDelete = (index)=>{
            let deletedArr = todolist.filter((el,i)=>i!==index)
            this.setState({todolist:deletedArr})
        }
        
       
        return(
            <>
            <div className="main" >

            <div className="Addtodo"   > 
            <input type="text"  className="own"  value={textValue} onChange={handleChange} placeholder="Add Todo Here" />
            <button onClick={handleClick} >Add</button>
            </div>

            <div className="one" >
                {todolist.map((el,i)=>(
                    <div key={i}  className="sagar" >
                        <p>{el}</p>
                        {/* <button onClick={()=>handleUpdate(i)}>Update</button> */}
                        <TiEdit onClick={()=>handleUpdate(i)} />
                        {/* <button onClick={()=>handleDelete(i)} >Delete</button> */}
                        <MdDelete onClick={()=>handleDelete(i)}    />
                        </div>
                
                ))}
            </div>
                </div>
            </>
        )
    }
}
