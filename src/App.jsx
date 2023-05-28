import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Navigate to={"/login"}/>} />
   </Routes>
  )
}

export default App
