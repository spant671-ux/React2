
function App() {

  function clickHandler(){
    alert("I am clicked!")
  }

  function mouseOver(){
    alert("Mouse is over the paragraph.")
  }

  return (
    <div>
      <p onMouseOver={mouseOver} style={{border:"1px solid black"}}>
        I am a Paragraph.
      </p>
     <button onClick={clickHandler}>
      Click me
     </button>
    </div>
  )
}

export default App
