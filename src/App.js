import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import AddTasktoListForm from './components/AddTaskToListForm';
import UpdateTaskInListForm from './components/UpdateTaskInListForm';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  
  const [toDoList, setToDoList]=useState([]);
  
  const [newTask, setNewTask] = useState('');
  const [updateData,setUpdateData] = useState('');
  

  const addTask = () =>{
    if(newTask)
    {
      let taskId=toDoList.length+1;
      let entry={id:taskId, title:newTask, status:false}
      setToDoList([...toDoList,entry]);
      setNewTask('');
    }
  }
  const deleteTask = (id)=>{
    let filteredTasks=toDoList.filter(task => task.id !== id);
    setToDoList(filteredTasks);
  }

  const markTaskDone = (id)=>{
    let remainingTasks=toDoList.map(task => {
      if(task.id === id)
      {
        return ({...task, status: !task.status})
      }
      return task;
    })
    setToDoList(remainingTasks);
  }

  const cancelTaskUpdate = ()=>{
    setUpdateData('');
  }
  const changeTask = (e)=>{
    let updatedEntry={
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(updatedEntry);
  }

  const updateTask = ()=>{
    let remainingTasks=[...toDoList].filter(task => task.id !== updateData.id);
    let newCombinedObject=[...remainingTasks,updateData];
    setToDoList(newCombinedObject);
    setUpdateData('');
  }
  return (
    <div className="container App">
      <br/><br/>
      <h1>TO DO LIST</h1>
      <br/><br/>


      {updateData && updateData ? (
        <UpdateTaskInListForm updateData={updateData} changeTask={changeTask} cancelTaskUpdate={cancelTaskUpdate} updateTask={updateTask}/>
      
      ):
      (
        <AddTasktoListForm newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
      )}
      
      {/* Display The To Do List */}
      {toDoList && toDoList.length ? '' : 'To Do List is Empty'}
      <ToDoList toDoList={toDoList} markTaskDone={markTaskDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />
      
    </div>
  );
}

export default App;
