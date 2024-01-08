export const UpdateForm = ({
  changeTask,
  updateTask,
  cancelUpdateTask,
  updateData,
}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={updateTask} className="btn btn-lg btn-success mr-20">
            Update
          </button>
          <button onClick={cancelUpdateTask} className="btn btn-lg btn-warning">
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};
