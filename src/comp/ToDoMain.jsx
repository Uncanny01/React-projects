import ToDoInput from "./ToDoInput";
import ToDoItems from "./ToDoItems";
import { ContextAPI } from "../store/contextAPIstore";
import { useEffect, useState } from "react";

const ToDoMain = ()=>{

  const getItems = ()=>{
    let item = localStorage.getItem('items');
    return JSON.parse(item);
  }

  const [listItem, setlistItem] = useState(getItems);

  const addItem = (Name, Date)=>{
    const newItem = {name: Name, date: Date}
    const updatedList = [...listItem, newItem];
    setlistItem(updatedList);
  }

  const deleteItem = (a, b)=>{
    const listAfterDelete = listItem.filter(items=> items.name!==a || items.date!==b);
    setlistItem(listAfterDelete);
  }

  useEffect(()=>{
    localStorage.setItem('items', JSON.stringify(listItem))
  }, [listItem])

  return (
    <>
      <ContextAPI.Provider 
      value={{
        listItem,
        addItem,
        deleteItem}}>
        <ToDoInput/>
        <ToDoItems/>
      </ContextAPI.Provider>
    </>
  )
}

export default ToDoMain;