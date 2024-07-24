// import React from 'react'
// import { Link } from 'react-router-dom'
// import Home from './Home'
// import Gallery from './Gallery'
// import Menu from './Menu'
// import About from './About'

// function Contact() {
//   return (
//     <>
//       <p>Welcome to Contact Page</p>
//       <Link to="{/}">{Home}</Link>
//       <Link to="{/gallery}">{Gallery}</Link>
//       <Link to="{/menu}">{Menu}</Link>
//       <Link to="{/about}">{About}</Link>
//     </>
//   )
// }

// export default Contact

import React from 'react'
import { useNavigate } from 'react-router-dom'


function Contact() {
  const navigate= useNavigate();
  function goTomenu(){
    navigate("/Menu")
  }
  return (
    <>
      <p>Welcome to Contact Page</p>
      <button onClick={goTomenu}>Menu</button>
     
    </>
  )
}

export default Contact