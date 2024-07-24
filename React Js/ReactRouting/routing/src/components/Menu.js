// import React from 'react'
// import { Link } from 'react-router-dom'
// import Home from './Home'
// import Contact from './Contact'
// import Gallery from './Gallery'
// import About from './About'

// function Menu() {
//   return (
//     <>
//     <p>Welcome to Menu Page</p>
//     <Link to="{/}">{Home}</Link>
//     <Link to="{/gallery}">{Gallery}</Link>
//     <Link to="{/about}">{About}</Link>
//     <Link to="{/contact}">{Contact}</Link>
//     </>
//   )
// }

// export default Menu

import React from 'react'
import { useNavigate } from 'react-router-dom'


 
function Menu() {
  const navigate= useNavigate();
  function goToabout(){
    navigate("/About")
  }
  return (
    <>
    <p>Welcome to Menu Page</p>
    <button onClick={goToabout}>About</button>
    </>
  )
}

export default Menu