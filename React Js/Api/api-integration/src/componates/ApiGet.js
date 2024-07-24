import axios from 'axios';
import React, { useEffect, useState } from 'react'
function ApiGet() {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setuserData(response.data)
      })
  }, [])



  return (

    <>
      <div>      
        {userData.map((data) => {
        return (
          <div>
            {data.name}
          </div>
        )
      })}</div>
    </>

  )

}

export default ApiGet