import React, { useEffect, useState } from 'react';
import Header from '../../../components/header';
import { Link } from 'react-router-dom';

function Lista() {

    const [ itens, setItens ] = useState([]);
    useEffect( () => {
        async function getItens() {
            const resposta = await fetch('http://localhost:4000/itens');
            const body = await resposta.json();

            setItens(body);
            
        }

        getItens();
    }, [])

    useEffect( () => {
        return () => {
            alert('Estou sendo destruído');
        }

    }, [])

    return (
        <>
            <Header/>
            <main>
                <h1>Listar itens</h1>
                <Link to='/'>Voltar</Link>

                <ul className='list-group'>
                    {
                        itens.map( (item, index) => {
                        return <li key={index} className="list-group-item">{item.nome}</li>
                        } )
                    }
                </ul>
            </main>
        </>
    )
}


export default Lista;