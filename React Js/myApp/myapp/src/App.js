// import React from 'react'

// function App() {
//   let a = 10;
//   let b = 20;
//   let sum = 0;
//   let mul = 1;
//   let sub = 0;
//   return (
//     <>
//       <p>sum of a & b</p>
//       {sum = a + b}
//       <br />
//       <p>multipication of a & b</p>
//       {
//         mul = a * b}
//       <br />
//       <p>substraction of a & b</p>
//       {
//         sub = a - b}
//       <p>a =10 & b= 20</p>
//       {
//         <p>{ a < b ? "a less then b" : "b less then a"} </p>
//       }
//       {
//         <p>{ a== b ? "a & b equal " : "a & b not equal"} </p>
//       }

//     </>


//   )
// }

// export default App

//----------------------------------------------------[use state()]---------------------------------------------------------------




import React, { useEffect, useRef, useState } from 'react'

function App() {
    const count = useRef(0);
    const [input,inputhandler]=useState('');
    useEffect(()=>{

    })

  return (
    <>
    <input></input>
    </>
  )
}

export default App

