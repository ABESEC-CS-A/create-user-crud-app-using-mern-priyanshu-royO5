function Appname() {
  const headingStyle = {
    backgroundColor: "black",
    color: "White",
    textAlign: "center",
    fontFamily: "Arial",
    padding: 9,
    margin: 0,
  };
  const heading2Style = {
    backgroundColor: "grey",
    color: "White",
    textAlign: "center",
    fontFamily: "Arial",
    padding: 5,
    marginDown: 9,
  };
  return (
    <div>
      <h1 style={headingStyle}>MY USER APP</h1>
      <h3 style={heading2Style}>List Of User</h3>
    </div>
  );
}

export default Appname;
