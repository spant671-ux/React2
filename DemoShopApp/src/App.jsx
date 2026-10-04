// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import Item from './components/Item'
import ItemDate from './components/ItemDate'

function App() {
  
  return (
    <>
    <div>
      <Item name="Nirma"></Item>
      <ItemDate day="20" month="June" year="2000"></ItemDate>
      <Item name="Ariel"></Item>
      <ItemDate day="19" month="August" year="2010"></ItemDate>
      <Item name="Surf Excel"></Item>
      <ItemDate day="29" month="January" year="1990"></ItemDate>
    <div className='App'>Hello Guys</div>
    </div>
    </>
  )
}

export default App
