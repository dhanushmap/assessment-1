import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import CreateList from "./components/CreateList";
import ListItems from "./components/ListItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <div className="page-title">
          <h4>Assessment - goodbits</h4>
        </div>
        <div className="outer-container container">
          <Navigation />
        </div>

        <Routes>
          <Route path="/" exact element={<CreateList />} />
          <Route path="/get-lists" element={<ListItems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
