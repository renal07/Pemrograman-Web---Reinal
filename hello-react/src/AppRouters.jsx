import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Contact from "./Pages/Contact"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import App from "./App"


const AppRouters =() =>{
    return(
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="Contact">Contact</Link>
        </nav>
        <Routes>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/" element={<App/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
 export default AppRouters