import React from 'react'
import Header from './components/Header'
import  Footer from './components/Footer'
import HomePage from './components/HomePage'
import Checkout from './Pages/Checkout'
import Orders from './Pages/Orders'
import Payment  from './Pages/Payment'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => { 
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders/:id" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  )
}

export default App