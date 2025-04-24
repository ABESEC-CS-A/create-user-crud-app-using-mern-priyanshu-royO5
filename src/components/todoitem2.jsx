function Todostored2() {
  let todoname = "Go to College";
  let tododate = "4/10/2023";
  return (
    <div className="row mb-3">
      <div className="col-3">{todoname}</div>
      <div className="col-3">{tododate}</div>
      <div className="col-3">{todoname}</div>
      <div className="col-1">{tododate}</div>
      <div className="col-1 editcss">
        <button type="button" className="btn btn-success">
          Edit
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todostored2;
