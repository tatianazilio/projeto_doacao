import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Card from './components/card';

import './global.css'

function App() {
  const listaDeCards = [<Card />, <Card />, <Card />, <Card />]
  return (
    <div className="App">
      <Header />
      <main className="container d-flex">
        {listaDeCards}
      </main>
      <Footer />
    </div>
  );
}

export default App;
