import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hello />
      <Content />
    </> //Wraper tapi tdk bisa di styling
  );
}

export default App;
