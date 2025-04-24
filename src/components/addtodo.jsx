function Addtodo() {
  return (
    <div className="row mb-3">
      <div className="col-3">
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter Todo here"
          />
        </div>
      </div>
      <div className="col-3">
        <div className="input-group ">
          <input
            type="text"
            placeholder="Enter User Email"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <div className="col-3">
        <div className="input-group ">
          <input
            type="text"
            placeholder="Enter Name of User"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <div className="col-1">
        <div className="input-group ">
          <input
            type="text"
            placeholder=""
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <div className="col-2 centreElement">
        <button type="button" className="btn btn-primary">
          Add User
        </button>
      </div>
    </div>
  );
}
export default Addtodo;
