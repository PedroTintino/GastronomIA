import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import NewUser from "./pages/NewUser";
import Home from "./pages/Home";


function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Auth/> }></Route>
          <Route path="/NewUSer" element={ <NewUser/> }></Route>
          <Route path="/Home" element={ <Home/> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;