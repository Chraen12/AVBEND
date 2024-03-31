import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Addminuser from "./user";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="user" element={<Addminuser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
