import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello!</h1>
      <h3>Welcome to my react application!</h3>
      <p>Let's learn how to deploy to EC2 with Jenkins</p>
    </div>
  )
}

export default App
