import React, { useState } from 'react';
import Header from '../../../components/header';
import { ToastContainer, toast } from 'react-toastify';


export default function Cadastro() {
    const [ nomeItem, setNomeItem ] = useState('')
    const [ descricaoItem, setDescricaoItem ] = useState('')


    async function finalizarCadastro(event) {
        event.preventDefault();
        const dados = {
            nome: nomeItem,
            descricao: descricaoItem
        }

        const resposta = await fetch('http://localhost:4000/itens', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })

        if (resposta.status === 201) {
            toast.success('Item cadastrado com sucesso', {
                position: 'bottom-right'
            })
        }

        setNomeItem('');
        setDescricaoItem('');

    }

    return (
    <>
        <Header />
        <ToastContainer />
        <main className="container">
            <h1>Cadastro de itens para doação</h1>

            <form onSubmit={finalizarCadastro} className="card p-3 w-50">
                <div className="form-group">
                    <label>Nome do item</label>
                    <input type="text" value={nomeItem} onChange={(event) => setNomeItem(event.target.value)} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Descrição do item</label>
                    <input type="text" value={descricaoItem} onChange={(event) => setDescricaoItem(event.target.value)} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-success">Finalizar Cadastro</button>
            </form>
        </main>
    </>
    )
}