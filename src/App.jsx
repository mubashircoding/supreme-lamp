import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./routs/Contact";
import Home from "./routs/Home";
import Pricing from "./routs/Pricing";
import Training from "./routs/Training";
function App() {
  return (
    <div>
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path="/pricing" element={<Pricing/>}/>
   <Route path="/training" element={<Training/>}/>
   <Route path="/contact" element={<Contact/>}/>
   </Routes>
 
    </div>
  );
}

export default App;
