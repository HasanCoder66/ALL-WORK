import { useCallback, useState } from 'react'
import './App.css'
import { Comp1 } from './components'

function App() {
  const [count, setCount] = useState(0)






  return (
    <>
    <Comp1 prop1="hasan"/>
    {/* <button onClick={addHandler }>click to   {setCount((count)=>count + 1)} </button> */}
    </>
  )
}




  export default App