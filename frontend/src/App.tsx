import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import NewUser from "./pages/NewUser";


function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Auth/> }></Route>
          <Route path="/NewUSer" element={ <NewUser/> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;