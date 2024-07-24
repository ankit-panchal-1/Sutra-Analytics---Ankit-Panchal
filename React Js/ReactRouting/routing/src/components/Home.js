// import React from 'react'
// import { Link } from 'react-router-dom'
// import Contact from './Contact'
// import Gallery from './Gallery'
// import Menu from './Menu'
// import About from './About'

// function Home() {
//   return (
//     <>
//     <p>welcome home page</p>
//     <Link to="{/menu}">{Menu}</Link>
//     <Link to="{/gallery}">{Gallery}</Link>
//     <Link to="{/about}">{About}</Link>
//     <Link to="{/contact}">{Contact}</Link>
//     </>
//   )
// }

// export default Home

import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  function goToGallary(){
    navigate("/Gallery")
  }
  return (
    <>
    <p>welcome home page</p>
    <button onClick={goToGallary}>gallery</button>
 
    </>
  )
}

export default Home