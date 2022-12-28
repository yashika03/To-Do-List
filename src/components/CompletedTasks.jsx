import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark, faPen } from '@fortawesome/free-solid-svg-icons';

const CompletedTasks= ({completedTasksList, deleteCompletedTasks}) => {
    return (
        <>
            {completedTasksList && completedTasksList
            .sort((task1,task2) => task1.id>task2.id ? 1 : -1)
            .map((task,index) => {
              return(
                <React.Fragment key={task.id}>
                  <div className="col taskBackground">
                    <div className={task.status ? 'done' : ''}>
                      <span className="taskNumber"> {index+1} </span>
                      <span className="taskName"> {task.title} </span>
                    </div>
                    <div class='icons'>
                      <span title="Delete Completed Task" onClick={()=>deleteCompletedTasks(task.id)}>
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

export default CompletedTasks;