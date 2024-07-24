
import axios from 'axios';
import React, { useState} from 'react'

function Post1() {
    const data = {fname : '',lname : ''}
    const [inputdata,setinputdata] = useState(data);
    const handleChange = (e) => {
        setinputdata({...inputdata,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputdata)
        .then((response) => {
            console.log(response)
        })
    }
  return (
    <form>
    <label htmlFor="fname">FirstName:</label>
    <input type='text' name ="fname" value={inputdata.fname} onChange={handleChange} /><br></br>
    <label htmlFor="lname">LastName:</label>
    <input type='text' name ="lname" value={inputdata.lname} onChange={handleChange} /><br></br>
    <button onClick={handleSubmit}>Submit</button>
</form>
  )
}

export default Post1