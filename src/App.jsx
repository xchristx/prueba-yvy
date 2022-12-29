import AutodiagLayout from "./pages/AutodiagLayout";
import { Autodiagnostico } from "./pages/Autodiagnostico"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Autodiagnostico />} />
        <Route path='/autodiagnostico' element={<AutodiagLayout />} />
      </Routes>
    </>
  )

}

export default App
