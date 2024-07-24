// import React from 'react'
// import { Link } from 'react-router-dom'
// import Home from './Home'
// import Gallery from './Gallery'
// import Menu from './Menu'
// import Contact from './Contact'


// function About() {
//   return (
//     <> 
//     <h1>welcome to about page </h1>
//     <Link to={'/'}>{Home}</Link>
//     <Link to="{/gallery}">{Gallery}</Link>
//     <Link to="{/menu}">{Menu}</Link>
//     <Link to="{/contact}">{Contact}</Link>
//     </>
//   )
// }

// export default About

import React from 'react'
import { useNavigate } from 'react-router-dom'



function About() {
  const navigate=useNavigate();
  function goTohome(){
    navigate("/")
  }
  return (
    <> 
    <p>welcome to about page </p>
    <button onClick={goTohome}>home</button>

    </>
  )
}

export default About