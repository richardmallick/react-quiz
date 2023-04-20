import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/signup" element={<Signup />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/quiz" element={<Quiz />}/>
            <Route exact path="/result" element={<Result />}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
