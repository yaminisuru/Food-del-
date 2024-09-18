import React from 'react'
import Navbar from './components/Navbar/navbar'
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import { useState } from 'react'
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <div>
      {showLogin?<LoginPopUp setShowLogin = {setShowLogin}/>:<></>}
    <div className='app'>
       <Navbar setShowLogin = {setShowLogin}/>
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order" element={<PlaceOrder/>} />
       </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
