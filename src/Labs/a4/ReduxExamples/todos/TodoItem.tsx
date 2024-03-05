import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoItem({ todo }: { todo: any }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item clearfix">
      {todo.title}
      <button className="btn btn-danger float-end" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      <button className="btn btn-primary float-end mx-3" onClick={() => dispatch(setTodo(todo))}> Edit </button>
    </li>
  );
}
export default TodoItem;