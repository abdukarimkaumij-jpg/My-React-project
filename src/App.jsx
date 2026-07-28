import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import PtoductDetailsContent from './pages/products-details-content/products-details-content'
import Profile from './pages/profile'
import Wishlist from './pages/wshlist'
import Cart from './pages/cart'
import About from './pages/about'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/product/:id' element={<PtoductDetailsContent />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
  )
}

export default App
