import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => setCounter(counter + 1)
  const resetHandler = () => setCounter(0)

  return (
    <div>
    <div>{counter}</div>
    <button onClick={handleClick}> 
      plus
    </button>
    <button onClick={resetHandler}> 
      reset
    </button>
  </div>
  )
}

export default App