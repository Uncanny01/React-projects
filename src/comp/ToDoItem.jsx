import { useContext } from "react";
import style from "./ToDoItem.module.css";
import { MdDelete } from "react-icons/md";
import { ContextAPI } from "../store/contextAPIstore";

const ToDoItem = ({name, date})=>{
  
  const {deleteItem} = useContext(ContextAPI);
  const delData = ()=>{
    if(confirm("Are you sure, you want to delete. This action cannot be undo."))
    {
      deleteItem(name, date);
    }
  }

  return (
    <>
      <div className={style.itemDiv}>
        <label>{name}</label>
        <label>{date}</label>
        <button className={style.btn} onClick={delData}><MdDelete /></button>
      </div>
    </>
  )
}

export default ToDoItem;