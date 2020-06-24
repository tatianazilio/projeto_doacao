import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Contato from './pages/contato';
import Cadastro from './pages/itens/cadastro'
import ListaItem from './pages/itens/lista'


function Routes() {
    return (<BrowserRouter> 
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/contato' component={Contato}></Route>
            <Route path='/itens/cadastro' component={Cadastro}></Route>
            <Route path='/itens/lista' component={ListaItem}></Route>
        </Switch>
    </BrowserRouter>);
}

export default Routes;