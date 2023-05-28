import { Navigate, Route, Routes } from "react-router-dom";

// Components
import { Login } from "./pages/index";
import { Register } from "./pages";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Navigate to={"/login"}/>} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
   </Routes>
  )
}

export default App
