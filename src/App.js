import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import AddTasktoListForm from './components/AddTaskToListForm';
import UpdateTaskInListForm from './components/UpdateTaskInListForm';
import ToDoList from './components/ToDoList';
import CompletedTasks from './components/CompletedTasks';


import './App.css';
function App() {
  const [toDoList, setToDoList]=useState([]);
  const [completedTasksList, setCompletedTasksList]=useState([]);
  
  const [newTask, setNewTask] = useState('');
  const [updateData,setUpdateData] = useState('');
  const [newCompletedTask, setNewCompletedTask] = useState('');

  
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

  const markTaskDone = (id,taskk)=>{
    toDoList.map(task => {
      if(task.id === id)
      {
        let filteredTask={...task, status: !task.status}
        addCompletedTask(filteredTask);
        let filteredTasks=toDoList.filter(task => task.id !== id);
        setToDoList(filteredTasks);
      }
    })
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

  const addCompletedTask = (task) =>{
      let taskId=completedTasksList.length+1;
      console.log(task);
      let entry={id:taskId, title:task.title, status:false}
      setCompletedTasksList([...completedTasksList,entry]);
      setNewCompletedTask('');
  }
  
  
  
  const deleteCompletedTasks = (id) =>
  {
    let filteredTasks=completedTasksList.filter(task => task.id !== id);
    setCompletedTasksList(filteredTasks);
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
      <ToDoList toDoList={toDoList} markTaskDone={markTaskDone} setUpdateData={setUpdateData} deleteTask={deleteTask} newCompletedTask={newCompletedTask} addCompletedTask={addCompletedTask}/>

    
      <br/><br/>
      <h2>Completed Tasks</h2>
      <br/><br/>
      {completedTasksList && completedTasksList.length ? '' : 'No Tasks in the completed tasks list'}
      <CompletedTasks completedTasksList={completedTasksList} deleteCompletedTasks={deleteCompletedTasks}/>
      
    </div>
  );
}

export default App;
