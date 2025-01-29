import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black  p-4 rounded-xl'>TailWind Test</h1>
      <Card username="Angel" btnText="follow me"/>

    </>
      
    
   
 
  )
}

export default App
