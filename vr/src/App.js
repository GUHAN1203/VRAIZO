import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from './Hero/Images';

function App() {
  return (
    <BrowserRouter>
   <Navbar />
    <Routes>

   <Route path ='/' element={<Images />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
