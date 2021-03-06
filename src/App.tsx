import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// components

import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

// Interface

import { ITodo } from './interfaces'

declare var confirm: (question: string) => boolean

const App:React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
   localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  // This functions belog to TodoList

  const toggleHandler = (event: React.FormEvent<HTMLInputElement>, id: number) => {
    setTodos(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
     const shouldRemove = confirm("Are you sure you want to delete this task?")
     if (shouldRemove) {
       setTodos(prev=>prev.filter(todo=>todo.id !== id))
     }
  }

  return (
    <>

      <Navbar />
      <div className="container">

        <h1 className="center bold">Todo app</h1>
        <TodoForm onAdd={addHandler} />

        <TodoList 
        todos={todos} 
        onToggle={toggleHandler} 
        onRemove={removeHandler} 
        />

      </div>


    </>
  );
}

export default App;
