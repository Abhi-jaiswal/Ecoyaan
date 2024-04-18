import "./App.css"
// React Router
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

// Components
import AboutUs from "./pages/AboutUs"

import Error from "./pages/Error"
// Pages
import Home from "./pages/Home"



function App() {

  return (
    <div className="flex min-h-screen w-full flex-col font-inter">
      <Navbar />
      <div className="mt-16"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
