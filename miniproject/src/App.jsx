import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Forms from './Froms'
import './App.css'
import AnimatedCard from "./AnimatedCard";
import LandingPage from "./LandingPage";
import GetInternship from './GetInternship'
import AddInternship from './AddInternships'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getinternship" element={<GetInternship />} />
      </Routes>
    </Router>
  );

}
export default App
