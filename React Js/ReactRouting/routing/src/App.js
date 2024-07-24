// // import React from 'react'
// // import { Route, Routes } from 'react-router'

// // function App() {
// //   return (
// //     <>
// //       <div className="App">
// //         <Routes>
// //           <Route path='/' element={<div>I am home Page </div>} ></Route> 
// //           <Route path='/gallery' element={<div>I am Gallery Page</div>}></Route> 
// //           <Route path='/about' element={<div>I am About Page</div>} ></Route> 
// //           <Route path='/contact' element={<div>I am Contact Page</div>} ></Route>
// //           <Route path='/menu' element={<div>I am Menu Page</div>}></Route>
// //         </Routes>
// //       </div>
// //     </>
// //   )
// // }

// // export default App



// import React from 'react'
// import { Route, Routes } from 'react-router'
// import Home from './components/Home'
// import About from './components/About'
// import Gallery from './components/Gallery'
// import Menu from './components/Menu'
// import Contact from './components/Contact'

// function App() {
//   return (
//     <>


//       <div className="App">
//         <Routes>
//           <Route path='/' element={<div>I'm Home Page</div>}>{Home}</Route>
//           <Route path='/about' element={<div>I'm About Page</div>}>{About}</Route>
//           <Route path='/contact' element={<div>I'm contact Page</div>}>{Contact}</Route>
//           <Route path='/gallery' element={<div>I'm gallery Page</div>}>{Gallery}</Route>
//           <Route path='/menu' element={<div>I'm menu Page</div>}>{Menu}</Route>
//         </Routes>
//       </div>
//     </>
//   )
// }

// export default App



import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Menu from './components/Menu'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
        </Routes>
        <About></About>
      </div>
    </>
  )
}

export default App


