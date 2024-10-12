import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber:1, description: 'Feed Puppy', assigned: 'Eric'},
    {rowNumber:2, description: 'Water Puppy', assigned: 'Two'},
    {rowNumber:3, description: 'Play Puppy', assigned: 'Three'},
    {rowNumber:4, description: 'Charged Puppy', assigned: 'Four'},
  ]);
  
  const addTodo = (description, assigned) =>{
    let rowNumber = 0;
    if(todos.length>0){
      rowNumber = todos[todos.length-1].rowNumber + 1;
    }else{
      rowNumber = 1;
    }
      const newTodo = {rowNumber:rowNumber, description:description, assigned: assigned}
      setTodos(todos => [...todos, newTodo]);
    
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value){
      return value.rowNumber !== deleteTodoRowNumber;
    })
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={()=> setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
            </button>

            {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>}
          
        </div>
      </div>
    </div>
  );
}

export default App;
