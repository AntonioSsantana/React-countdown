import { Navigate, Route, Routes } from "react-router-dom";

// Components
import { Login } from "./pages/index";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Navigate to={"/login"}/>} />
    <Route exact path="/login" element={<Login />} />
   </Routes>
  )
}

export default App
