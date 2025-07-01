import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './pages/shared/footer/Footer'
import Navbar from './pages/shared/havbar/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </>
  )
}

export default App
