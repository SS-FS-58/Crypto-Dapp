import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar, Welcome, Footer, Services, Transactions } from './components'

const App = () => {
  return (
    <div className="main-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <Services></Services>
      <Transactions></Transactions>
      <Footer></Footer>
    </div>
  )
}

export default App
