import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import {BsCheckLg} from 'react-icons/bs';

function App() {
  const [iscompleteScreen, setIscompleteScreen] = useState(false);
  const [allTodos, setTodos ] = useState([]);
  const [newTitle , setNewTitle] = useState("");
  const [newDescription , setNewDescription] = useState("");
 

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,

    }
    let updatedTodoArr = [...allTodos];

    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
  }

  const handleDeleteTodo = (index) => {
    let reducedTodo= [...allTodos];
    reducedTodo.splice(index);
  
    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);

  }
useEffect(() => {
let savedTodo = JSON.parse(localStorage.getItem("todolist")) ;
if(savedTodo){
  setTodos(savedTodo);
}
}, [])
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label > Title</label>
            <input type="text" placeholder="Ada title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          </div>
          <div className="todo-input-item">
            <label > description</label>
            <input type="text" placeholder="Add description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primary-btn" onClick={handleAddTodo}>Add</button>
          </div>
        </div>
        <div className="btn-area">
          <button className={`scendary-btn ${iscompleteScreen===false && 'active'}`} onClick={() => setIscompleteScreen(false)}>Todo</button>
          <button className={`scendary-btn ${iscompleteScreen===true && 'active'}`} onClick={() => setIscompleteScreen(true)}>Complete</button>
        </div>
        <div className="todo-list">
          {allTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
            <div>
              <AiOutlineDelete className="icon"  onClick={ ()=>handleDeleteTodo(index)} />
              <BsCheckLg  className="check-icon"/>
            </div>
          </div>
            )

          })}
        </div>
      </div>
    </div>
  );
}

export default App;
