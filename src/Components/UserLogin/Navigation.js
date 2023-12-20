import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Home from "./Home"
import Register from "./Register"


const Navigation1 =()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Login}/>
                    <Route path="/register" Component={Register}/>
                    <Route path="/home" Component={Home}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Navigation1