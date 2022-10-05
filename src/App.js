import React from 'react'
import { useState } from 'react'
import './App.css'

const  App=() => {
  const [todo, setTodo]  = useState("");
  const [todos, setTodos]  = useState([]);
  const [editId,setEditId] = useState(0)

const handleSubmit=(e)=>{
e.preventDefault(); //use to not relode

if (editId) {
  const editTodo = todos.find((i)=>i.id === editId );
  const updateTodos =todos.map((t)=> 
  t.id === editTodo.id ? (t={id:t.id,todo}) : {id:t.id,todo: t.todo}
  );
  setTodos(updateTodos);
  setEditId(0)
  setTodo("")
  return;

}

if(todo == ""){ 
  alert("emty")
}{
  setTodos([{id:`${todo}-${Date.now()}`,todo},...todos])
  setTodo("")
}};

const handleDelete =(id)=>{
  const deltodo = todos.filter((to)=>to.id !== id)
  setTodos([...deltodo])
}
const handleEdit =(id)=>{
const edittodo =todos.find((i)=>i.id === id);
setTodo(edittodo.todo)
setEditId(id);
}

  return (<>
  <div className='App'>
<div className='container'>
  <h1>ToDo List App</h1>

  <form className='todoform' onSubmit={handleSubmit}>
    <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    <button type='submit'>{ editId ? "Edit" : "Go"} </button>
  </form>
  <ul className='alltodos'>
    { todos.map((t)=>(
<li className='singletodo' >
      <span className='todotext'key={t.id}>{t.todo}</span>
      <button onClick={()=> handleEdit(t.id)}>Edit</button>
      <button onClick={()=> handleDelete(t.id)}>Delete</button>
      </li>
    ))
    }
    
     </ul>
</div>


  </div>
  </>
    
  )
}

export default App