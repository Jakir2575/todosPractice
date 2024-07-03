import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Components/Todo'
// import List from './Components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo />
      {/* <List /> */}
    </>
  )
}

export default App
