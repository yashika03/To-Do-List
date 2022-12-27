const AddTaskToListForm= ({newTask, setNewTask, addTask}) => {
    return (
        <>
        {/* Form To Add new Task to The To Do List */}
        <div className="row">
          <div className="col">
            <input  value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"/>
          </div>
          <div className="col-auto">
            <button onClick={addTask} className="btn btn-lg btn-dark btn-success">Add Task</button>
          </div>
        </div>
        <br/>
        <br/>
        </>
    );
}

export default AddTaskToListForm;