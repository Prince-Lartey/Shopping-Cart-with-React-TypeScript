import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
