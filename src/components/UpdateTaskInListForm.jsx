const UpdateTaskInListForm= ({updateData, changeTask, cancelTaskUpdate, updateTask}) => {
    return (
        <>
        {/* Form To Update a task in the To Do List */}
        <div className="row">
          <div className="col">
            <input value={updateData && updateData.title} 
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg"/>
          </div>
          <div className="col-auto">
            <button onClick={updateTask} className="btn btn-lg btn-dark btn-success mr-20">Update Task</button>
            <button onClick={cancelTaskUpdate} className="btn btn-lg btn-warning">Cancel</button>
          </div>
        </div>
        <br/>
        </>
    );
}


export default UpdateTaskInListForm;