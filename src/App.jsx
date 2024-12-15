import './App.css'
import Footer from './Components/common/Footer'
import Navbar from './Components/common/Navbar'
import { Outlet } from 'react-router-dom'

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
