import "./App.css";
import React from "react";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 function App() {
  return (
  
    
   <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>

      </>
    
  );
}
export default App