import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dependency list

  //Variation: 1
  //Runs on every Render
  // useEffect(() => {
  //   alert("I will run on each render!")
  // })

  //Variation: 2
  //Runs only on first Render
  // useEffect(() => {
  //   alert("I will run only on first render!")
  // }, [])

  //Variation: 3
  useEffect(() => {
    alert("I will run every time count is updated!")
  }, [count])
  
  

  function clickHandler(){
    setCount(count+1);
  }
  

  return (
    <div>
      <button onClick={clickHandler}>
        Click me
      </button>
      Count: {count}
    </div>
  )
}

export default App
