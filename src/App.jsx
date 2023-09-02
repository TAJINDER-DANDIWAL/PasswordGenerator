import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [length, setLength] = useState(10)
  const [numberallow, setNumberallow] = useState(false)
  const [charallow, setCharallow] = useState(false)

  let PasswordGenerator = useCallback(() => {
    let password = ""
    let string = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz"

    if (numberallow) {
      string += "1234567890"
    }
    if (charallow) {
      string += "!@#$%^&*()_+"
    }
  }, [length, numberallow, charallow])

  for (let i = 0; i <= array.length; i++) {
    let char = Math.floor(Math.random * string.length +1)
    let 
    
  }
  return (
    <>
    <h1 className='text-4xl  text text-white align-text-top '>Password Generator</h1>
    </>
  )
}

export default App
