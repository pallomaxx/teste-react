import React from 'react'
import icon_emoji from '../assets/icon-emoji.png'
import './Mensagem.css'
import { Link } from 'react-router-dom';


export const Mensagem = () => {
  return (
    <div className='container'>
        <div className="icon">
            <img src={icon_emoji} alt="" />
        </div>
        <div className="mensagem">
            <h1>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</h1>
        </div>
        <Link to="/cadastrar-imovel" className='cadastro'>Cadastrar meu primeiro imóvel
        </Link>
    </div>
  )
}
