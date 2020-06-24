import React, { useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Card from '../../components/card'
import Depoimento from '../../components/depoimento'
import Container from '../../components/container'

import '../../global.css'

function Home() {

  const listaDeCards = [
    <Card key={1} titulo="Doação de Roupa"/>, 
    <Card key={2} titulo="Doação de Alimento"/>, 
    <Card key={3} titulo="Doação de Equipamento"/>
  ]

  const [stateCard, setStateCard] = useState(listaDeCards)
  
  function adicionarCard() {
    setStateCard([...stateCard, <Card/>])
  }

  const depoimentos = [
    <Depoimento autor="João" titulo="Muito bom!" depoimento="Adorei. Excelente!"/>,
    <Depoimento autor="Lucas" titulo="Valeu a pena!" depoimento="Adorei e a pessoa ficou muito agradecida!"/>,
  ]

  const [stateDepoimento, setStateDepoimento] = useState(depoimentos)

  function adicionarDepoimento(autor, titulo, depoimento) {
    setStateDepoimento([...stateDepoimento, <Depoimento autor={autor} titulo={titulo} depoimento={depoimento}/>])
  }

  return (
    <div className="App">
      <Header logado={false}/>
      <main className="main">
        {stateCard}
      </main>
      <button onClick={adicionarCard}>Adicionar doação</button>
      <Container>
        <h3>Depoimentos</h3>
        {stateDepoimento}
        <button onClick={() => adicionarDepoimento("Jorge", "muito bom", "lalala")}>Adicionar depoimento</button>
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
