import React from 'react';
import { Todo } from './Todo';

export const Todos = (props) => {
  let containerStyle = {
    minHeight:"57vh"
  }
  return (
    <div className="container my-3" style={containerStyle}>
      <h3 className="text-center">Todos List</h3>
      {props.todos.length === 0 ? (
        "No todos to display"
      ) : (
        props.todos.map((todo) => {
          return(
            <>
            <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
            </> )
        })
      )}
    </div>
  );
};