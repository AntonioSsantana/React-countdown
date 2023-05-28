import { Navigate, Route, Routes } from "react-router-dom";

// Components
import { Login, Register, Home } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to={"/login"} />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
