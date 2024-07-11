import { useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import {BsCheckLg} from 'react-icons/bs';

function App() {
  const [iscompleteScreen, setIscompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label > Title</label>
            <input type="text" placeholder="Ada title" />
          </div>
          <div className="todo-input-item">
            <label > description</label>
            <input type="text" placeholder="Add description" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primary-btn">Add</button>
          </div>
        </div>
        <div className="btn-area">
          <button className={`scendary-btn ${iscompleteScreen===false && 'active'}`} onClick={() => setIscompleteScreen(false)}>Todo</button>
          <button className={`scendary-btn ${iscompleteScreen===true && 'active'}`} onClick={() => setIscompleteScreen(true)}>Complete</button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <div>
            <h3>Task-1</h3>
            <p>Task-1 Description</p>
            </div>
            <div>
              <AiOutlineDelete className="icon" />
              <BsCheckLg  className="check-icon"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
