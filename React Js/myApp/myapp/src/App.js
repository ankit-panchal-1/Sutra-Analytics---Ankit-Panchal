// // import React from 'react'

// // function App() {
// // let a = 10;
// // let b = 20;
// // let sum = 0;
// // let mul = 1;
// // let sub = 0;
// // return (
// // <>
// // <p>sum of a & b</p>
// // {sum = a + b}
// // <br />
// // <p>multipication of a & b</p>
// // {
// // mul = a * b}
// // <br />
// // <p>substraction of a & b</p>
// // {
// // sub = a - b}
// // <p>a =10 & b= 20</p>
// // {
// // <p>{ a < b ? "a less then b" : "b less then a" } </p>
// // }
// // {
// // <p>{ a== b ? "a & b equal " : "a & b not equal"} </p>
// // }

// // </>


// // )
// // }

// // export default App

// //----------------------------------------------------[use
// // ref()]---------------------------------------------------------------


// // Tracking Previous Value using useRef()


// // import React, { useEffect, useRef, useState } from 'react'

// // function App() {
// // const ref = useRef();
// // const [count, setCount] = useState(0);
// // useEffect(() => {
// // ref.current = count
// // })
// // function update() {
// // setCount(count + 1)
// // }

// // return (
// // <>
// // <p>count : {count}</p>
// // <p>pervisecount number:
// // {ref.current}
// // </p>

// // <button onClick={update}>click</button>
// // </>
// // )
// // }

// // export default App

// // -------------------------------------------------------------------

// // Accessing DOM Elements using useRef()
// // Managing Focus using useRef()
// // Storing Mutable Value using useRef()

// // import React, { useEffect, useRef, useState } from "react";

// // function App() {
// // const refElement = useRef("")
// // const [name, setName] = useState("Radhika");
// // function Reset() {
// // setName("")
// // }
// // function handleInput() {
// // refElement.current.style.color = "red";
// // refElement.current.value = "Smit";
// // refElement.current.focus();

// // }

// // return (
// // <>
// // <h1 style={{ textAlign: 'center' }}>Learn React useRef</h1>
// // <input style={{ margin: "20px" }} ref={refElement} type="text" value={name} onChange={(e)=>
// // setName(e.target.value)} />
// // <button style={{ margin: "20px" }} onClick={Reset}>Reset</button>
// // <button style={{ margin: "20px" }} onClick={handleInput}>Handle Input</button>
// // </>
// // )
// // }

// // export default App;


// // ----------------- ----------[2,4]---------------------
// // import React, { useRef, useState } from 'react'

// // function App() {
// //     const [name, setName] = useState("ankit");
// //     const refName = useRef("")
// //     function handl() {
// //         refName.current.focus();
// //         refName.current.value='panchal'
// //     }
// //     return (
// //         <>
// //             <input type='text' value={name} ref={refName} onChange={(e) => { setName(e.target.value) }}></input>
// //             <button onClick={handl}>focus</button>

// //         </>
// //     )
// // }

// // export default App;
// //-----------------------------------------[1]----------

// // import React, { useEffect, useRef, useState } from 'react'

// // function App() {
// //   const [name, setName] = useState("ankit");
// //   const refName = useRef('')
// //   useEffect(() => {
// //     let lname = refName.current=name
// //     const change = document.getElementById('fname');
// //     change.innerHTML = `name: ${lname}`
// //   }, [name])
// //   return (
// //     <>
// //       <p id='fname'>
// // hello
// //       </p>
// //       <button onClick={()=>{
// //         setName("bilal")
// //       }}>click</button>
// //     </>
// //   )
// // }

// // export default App

// // -----------------

// import React from 'react';

// function App() {
//   // We hold the user's selected number in state.
//   const [selectedNum, setSelectedNum] = React.useState();
  
//   // We calculate all of the prime numbers between 0 and the
//   // user's chosen number, `selectedNum`:
//   const allPrimes = [];
//   for (let counter = 2; counter < selectedNum; counter++) {
//     if (isPrime(counter)) {
//       allPrimes.push(counter);
//     }
//   }
  
//   return (
//     <>
//       <form>
//         <label htmlFor="num">Your number:</label>
//         <input
//           type="number"
//           value={selectedNum}
//           onChange={(event) => {
//             // To prevent computers from exploding,
//             // we'll max out at 100k
//             let num = Math.min(100_000, Number(event.target.value));
            
//             setSelectedNum(num);
//           }}
//         />
//       </form>
//       <p>
//         There are {allPrimes.length} prime(s) between 1 and {selectedNum}:
//         {' '}
//         <span className="prime-list">
//           {allPrimes.join(', ')}
//         </span>
//       </p>
//     </>
//   );
// }


// function isPrime(n){
//   const max = Math.ceil(Math.sqrt(n));
  
//   if (n === 2) {
//     return true;
//   }
  
//   for (let counter = 2; counter <= max; counter++) {
//     if (n % counter === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// export default App;


// Filename - App.js

import React, { useState } from "react";

function App() {
	const [number, setNumber] = useState(0);
	const squaredNum = squareNum(number);
	const onChangeHandler = (e) => {
		setNumber(e.target.value);
	};
	return (
		<div className="App">
			<h1>Welcome to Geeksforgeeks</h1>
			<input
				type="number"
				placeholder="Enter a number"
				value={number}
				onChange={onChangeHandler}
			></input>
			<div>OUTPUT: {squaredNum}</div>
		</div>
	);
}
function squareNum(number) {
	console.log("Squaring will be done!");
	return Math.pow(number, 3);
}
export default App;
