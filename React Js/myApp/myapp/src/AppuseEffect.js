
//---------------------------------------------------------------[use effect()]---------------------------------------------



// import React, { useEffect, useState } from 'react'

// function App() {
//   const [count, setcount] = useState(0);
//   const [data, setdata] = useState('ram');

// useEffect(() => {
//   console.log(data);
// },[data])

//   function countData() {
//     setcount(count + 1);
//   }

//   function updateData() {
//     setdata("Sita");
//   }

//   return (
//     <>
//       <h1>count of click button ={count}</h1>

//       <button onClick={countData}>click me</button>
//       <button onClick={updateData}>update me</button>


//     </>
//   )
// }

// export default App


//-----------

import { useEffect, useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const update = document.getElementById('update');

        update.innerHTML = `Count: ${count}`;
    }, [count]);
    // import { useEffect, useState } from 'react';
    function change() {
        setCount(count + 1);
    }
    return (
        <div>
            <p id="update">Initial text</p>
            <button onClick={change}>Increment</button>
        </div>
    );
}
export default App