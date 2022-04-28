import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoBox from "./components/TodoBox";
import CreateList from "./components/CreateList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container-fluid">
      <div className="page-title">
        <h4>Assessment - goodbits</h4>
      </div>

      <div>
        <TodoBox />
      </div>
    </div>
  );
}

export default App;
