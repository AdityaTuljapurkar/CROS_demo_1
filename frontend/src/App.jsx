import { useState } from 'react'
import axios from 'axios' ; 
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes ,  setjokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes').then((response)=>{
      setjokes(response.data)
    }).catch((error)=>console.log(error)
    )
  })
  return (
    <>

<div>
  <h2>This is the frontend </h2>
    <span>Jokes : {jokes.length}</span>
</div>
      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{index+1}:{joke.title}</h3>
            <h3>{joke.content}</h3>
            <hr></hr>
          </div>
        ))
      }
    </>
  )
}

export default App
