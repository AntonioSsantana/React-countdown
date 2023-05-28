import { Navigate, Route, Routes } from "react-router-dom";

// Components
import { Register } from "./pages";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Navigate to={"/login"}/>} />
    <Route exact path="/register" element={<Register />} />
   </Routes>
  )
}

export default App
