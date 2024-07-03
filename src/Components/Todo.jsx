import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodos, } from "../Redux/slice";

const Todo = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editTodo, setEditTodo] = useState(null);

 

  const handleAddTodo = () =>{
    if(newTodoText.trim() !== ""){
        if(editTodo !== null){
            dispatch (editTodos({
                id: editTodo,
                text:newTodoText,
            }));
            setEditTodo("")
     } else{
            dispatch(addTodo({
                id: Date.now(),
                text: newTodoText,
            }))
            setNewTodoText("")
        }
    }
        
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditStart = (id, text) => {
    setEditTodo(id);
    setNewTodoText(text)
  }

  return (
    <div>
      <h1>Todo-List</h1>
      <div>
        <input
          type="text"
          placeholder="Add todo...."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Submit</button>
      </div>
      <div>
        <ul>
          {todos.map((e, i) => {
            return (
              <div key={e.id}>
                <li key={e.id}>
                  {e.text}
                  <button onClick={() => handleDelete(e.id)}>Delete</button>
                  <button onClick={()=>handleEditStart(e.id, e.text)}>Edit</button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
