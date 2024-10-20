import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const [data,seData]=useState( [] );
  const getData = async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    seData(res.data);
    console.log(data);
    }
  return (
    <div>
    <button onClick={getData}>Get Data</button>

          {data.map(function (para,index){
            return <div>
              <h3>{para.id}</h3>
              <h3>{para.title}</h3>
            </div>
          })}
      
    </div>
  )
}

export default App