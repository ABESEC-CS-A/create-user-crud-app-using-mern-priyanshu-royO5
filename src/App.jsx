import Addtodo from "./components/addtodo";
import Appname from "./components/appname";
import Todostored1 from "./components/todoitem1";
import Todostored2 from "./components/todoitem2";

function App() {
  return (
    <center className="header">
      <Appname></Appname>
      <div className="container text-center">
        <Addtodo></Addtodo>
        <Todostored1></Todostored1>
        <Todostored2></Todostored2>
      </div>
    </center>
  );
}

export default App;
