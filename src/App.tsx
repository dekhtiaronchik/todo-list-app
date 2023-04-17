import React from 'react';
import './App.css';
import { TodoList } from './pages/todoList';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <p>
         ToDo List
        </p>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
