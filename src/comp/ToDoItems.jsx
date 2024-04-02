import { useContext, useState } from "react";
import ToDoItem from "./ToDoItem";
import { ContextAPI } from "../store/contextAPIstore";

const ToDoItems = ()=>{

  const {listItem} = useContext(ContextAPI);

  return (
    <>
    {listItem.length===0 && <h3 style={{textAlign:'center'}}>No task to do. Create one.</h3>}
      {listItem.map(item=> <ToDoItem key={item.name} name={item.name} date={item.date}/> )}
    </>
  )
}

export default ToDoItems;