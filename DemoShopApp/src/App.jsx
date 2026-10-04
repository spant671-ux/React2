// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import Item from './components/Item'
import ItemDate from './components/ItemDate'

function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDate: 20,
      itemMonth: "June",
      itemYear: "1998"
    },
    {
      itemName: "Nirma2",
      itemDate: 2,
      itemMonth: "July",
      itemYear: "1990"
    },
    {
      itemName: "Nirma3",
      itemDate: 10,
      itemMonth: "September",
      itemYear: "2010"
    }
  ];
  return (
    <>
    <div>
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    <div className='App'>Hello Guys</div>
    </div>
    </>
  )
}

export default App
