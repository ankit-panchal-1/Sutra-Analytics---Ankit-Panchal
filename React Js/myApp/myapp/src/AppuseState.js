//------------------------------------------[ 1--Color Picker App using useState()-]------------------------------------------


// import React, { useState } from 'react';

// const App = () => {
//   const [Color, setColor] = useState('#ffffff');

//   function ColorChange() {
//     setColor('#ff0000');
//   };
//   function reset(){
//     setColor('#ffffff');
//   };

//   return (
//     <div>
//       <h5>Color Picker App using useState() </h5>
//       <div style={{ backgroundColor: Color, width: '200px', height: '200px', margin: '20px', border: '1px solid black' }}></div>
//       <button onClick={ColorChange}>click button</button>
//       <button onClick={reset}>click button</button>

//     </div>
//   );
// };

// export default App;

//------------------------------------------------//-----------------------------------------------------------------------------

// import React, { useState } from 'react';
//  const App = () => {
// const [option,setoption]=useState('');

// const optionchange = (event) => {
//   setoption(event.target.value)
// }


//   return (
//     <div>
//       <h2>Dropdown Selection</h2>
//       <label htmlFor="dropdown">Select an option:</label>
//       <select id="dropdown" value={option} onChange={optionchange}>
//         <option value="">--Please choose an option--</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       <div>
//         <p>You have selected: {option}</p>
//       </div>
//     </div>
//   );
// };

// export default App;


//--------------------------- [3 --- Simple Counter with Step using useState() ]---------------------------------

// import React,{useState } from 'react'

// function App() {
//   const [count, setcount] = useState(0);

// function inc1() {
//   setcount(count+1);

// }
// function dec1(){
//   setcount(count-1);
// }

// function inc5() {
//   setcount(count+5);

// }
// function dec5(){
//   setcount(count-5);
// }
// function reset(){
//   setcount(0)
// }
//   return (
//     <>
//     <h5>Simple Counter with Step using useState()</h5>
//       <p>count of click button ={count}</p>

//       <button onClick={inc1}> incerse +1</button>
//       <button onClick={dec1}>decrese-1</button>
//       <button onClick={reset}>reset</button>

//       <button onClick={inc5}> incerse +5</button>
//       <button onClick={dec5}>decrese-5</button>



//     </>
//   )
// }

// export default App

//-----------------------------------------------------------------//-------------------------------------------------------------

//--------------------------- [4 --- Simple Counter with Step using useState() ]---------------------------------

// import React,{useState } from 'react'

// function App() {
//   const [count, setcount] = useState(0);

// function inc1() {
//   setcount(count+1);

// }
// function dec1(){
//   setcount(count-1);
// }

// function reset(){
//   setcount(0)
// }
//   return (
//     <>
//     <h5>Create a simple counter component using useState hook to manage stat</h5>
//       <p>count of click button ={count}</p>

//       <button onClick={inc1}> incerse +1</button>
//       <button onClick={dec1}>decrese-1</button>
//       <button onClick={reset}>reset</button>




//     </>
//   )
// }

// export default App

//-----------------------------------------------------------------//-------------------------------------------------------------
