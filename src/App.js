import{BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"


import Home from "./components/Home";
import './App.css';
import IndexPage from "./components/IndexPage";

function App() {
  return (
   <div>
    
<Router>
    <nav>
      
      
      <Link to="/">Home</Link> 

    </nav>
    <Routes>
      <Route path="/" element={<IndexPage/>} />
      <Route path="/Home" element={<Home/>} />

    
    </Routes>
   </Router>
   </div>
  );
}

export default App;
