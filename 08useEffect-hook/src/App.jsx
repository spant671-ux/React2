import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)

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
  // useEffect(() => {
  //   alert("I will run every time count is updated!")
  // }, [count])

  //Variation: 4
  //Multiple Dependencies
  useEffect(() => {
    alert("I will run every time when count or total is updated!")
  }, [count, total])
  
  
  

  function clickHandler(){
    setCount(count+1);
  }

  function handleTotalClick(){
    setTotal(total+1);
  }
  

  return (
    <div>
      <button onClick={clickHandler}>
        Update Count
      </button>
      <br />
      Count: {count}

      <br />
      <button onClick={handleTotalClick}>
        Update Total
      </button>
      <br />
      Total: {total}
    </div>
  )
}

export default App
