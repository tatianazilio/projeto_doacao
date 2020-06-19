import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/card';
import Depoimento from '../../components/depoimento';
import Container from '../../components/container';

import '../../global.css'

function App() {
  const listaDeCards = [
  <Card titulo="Doação de Roupa"/>, 
  <Card titulo="Doação de Alimento"/>, 
  <Card titulo="Doação de Equipamento"/>
]

const depoimentos = [
  <Depoimento autor="João" titulo="Muito bom!" depoimento="Adorei. Excelente!"/>,
  <Depoimento autor="Lucas" titulo="Valeu a pena!" depoimento="Adorei e a pessoa ficou muito agradecida!"/>,

]

  return (
    <div className="App">
      <Header />
      <main className="main">
        {listaDeCards}
      </main>
      <Container>
        <h3>Depoimentos</h3>
        {depoimentos}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
