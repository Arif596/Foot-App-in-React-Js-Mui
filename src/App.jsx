import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Components/Layouts/Layout"
import Home from './Pages/Home'
import About from './Pages/About'
import Contactus from './Pages/Contactus'
import Login from './Pages/Login'
import Menu from './Pages/Menu'
import Register from './Pages/Register'
import Pagenotfound from "./Pages/pagenotfound"
function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contactus/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>        
        <Route path="*" element={<Pagenotfound/>}></Route>
        <Route path="/register"element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
