import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark, faPen } from '@fortawesome/free-solid-svg-icons';

const ToDoList= ({toDoList, markTaskDone, setUpdateData, deleteTask}) => {
    return (
        <>
        { toDoList && toDoList
            .sort((task1,task2) => task1.id>task2.id ? 1 : -1)
            .map((task,index) => {
              return(
                <React.Fragment key={task.id}>
                  <div className="col taskBackground">
                    <div className={task.status ? 'done' : ''}>
                      <span className="taskNumber"> {index+1} </span>
                      <span className="taskName"> {task.title} </span>
                    </div>
      
                    {/* Icons to make changes to the task */}
                    <div className='icons'>
                    {/* Icon to mark the task as done */}
                    <span title="Task Done" onClick={()=> markTaskDone(task.id)}>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                    {/* Icon to Edit a task */}
                    {task.status ? null: (
                      <span title="Edit Task" onClick={()=> setUpdateData({
                        id: task.id,
                        title: task.title,
                        status: task.status ? true : false
                      })}>
                      <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </span>
                    )}
                    {/* Icon to delete a task from the To Do list */}
                    <span title="Delete Task" onClick={()=>deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </span>
                  </div>
                  </div>
                </React.Fragment>
              )
            }
            )
            }
        </>
    );
}

export default ToDoList;