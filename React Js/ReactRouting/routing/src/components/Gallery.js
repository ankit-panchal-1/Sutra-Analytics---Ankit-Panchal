// import React from 'react'
// import { Link } from 'react-router-dom'
// import Home from './Home'
// import Contact from './Contact'
// import Menu from './Menu'
// import About from './About'
// function Gallery() {
//   return (
//     <>
    
//     <p>Welcome to gallery Page</p>
//     <Link to="{/}">{Home}</Link>
//     <Link to="{/menu}">{Menu}</Link>
//     <Link to="{/about}">{About}</Link>
//     <Link to="{/contact}">{Contact}</Link>
//     </>
//   )
// }

// export default Gallery

import React from 'react'
import { useNavigate } from 'react-router'

function Gallery() {
  const navigate =useNavigate();
  function goToconatct(){
    navigate("/Contact")
  } 
  return (
    <>
    
    <p>Welcome to gallery Page</p>
    <button onClick={goToconatct}>contact</button>

    </>
  )
}

export default Gallery