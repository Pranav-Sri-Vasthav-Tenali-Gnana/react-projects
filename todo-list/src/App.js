import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import {Footer} from "./Components/Footer";
import {Todos} from "./Components/Todos";
import React,{ useState } from 'react';
import { AddTodo } from './Components/AddTodo';

function App() {
  const onDelete = (todo) => {
    console.log("Delete Item", todo);

    setTodos(todos.filter((e)=> {
      return e!==todo;
    }))
  }; 

  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if(todos.length==0){
      sno = 1;
    } else {
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: 'java',
      desc: 'java is a programming language'
    },
    {
      sno:2,
      title: 'Python',
      desc: 'Python is a programming language'
    },
    {
      sno:3,
      title: 'react',
      desc: 'react is a programming language'
    }
  ]);

  return (
    <>
      <Header title="pranavs todos" isSearch={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete = {onDelete} />
      <Footer/>
    </>
  );
}

export default App;
