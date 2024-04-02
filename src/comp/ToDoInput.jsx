import style from "./ToDoInput.module.css";
import { useContext, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { ContextAPI } from "../store/contextAPIstore";

const ToDoInput = ()=>{

  const {addItem} = useContext(ContextAPI);
  const namelem = useRef();
  const datelem = useRef();
 
  const handleClick = (e)=>{
    e.preventDefault();
    const name = namelem.current.value;
    const date = datelem.current.value;
    if(name=="" || date=="")
    {
      alert("You must specify task name and date.");
    }
    else
    {
      addItem(name, date);
      namelem.current.value="";
      datelem.current.value="";
    }
  }

  return (
    <>
      <form action="" onSubmit={handleClick} className={style.inputDiv}>
        <input ref={namelem} type="text" className={style.inputText}/>
        <input ref={datelem} type="date" className={style.inputDate}/>
        <button className={style.btn}><IoMdAdd /></button>
      </form>
    </>
  )
}

export default ToDoInput;