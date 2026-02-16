import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
  const Navigate=useNavigate()
  return (
    <div>
       <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl ">MyApp</h1>

      <ul className="flex gap-5 text-lg">
        <li>
          <a href="#home" className="hover:text-yellow-400">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-yellow-400">Images</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400" onClick={()=>Navigate('/User')}>User</a>
        </li>                                 
        <li>
          <a href="#login" className="hover:text-yellow-400" onClick={()=>Navigate('/Admin')}>Admin</a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
