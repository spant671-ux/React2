// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import React from 'react';
import Products from './components/Products';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 200,
      date: new Date(2021, 2, 2),
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Ariel',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  return (
    <div>
      <Products items={products} />
    </div>
  );
}
export default App;
