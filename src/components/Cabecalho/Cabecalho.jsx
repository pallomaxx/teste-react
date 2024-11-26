import React from 'react'
import icon_arrow from '../assets/icon-arrow.png'
import icon_plus from '../assets/icon-plus.png'
import './Cabecalho.css'
import { Link } from 'react-router-dom';


export const Cabecalho = ({showButton, showTitle}) => {
  return (
    <nav className='header'>
        <div className="header-principal">
        <Link to="/">
            <button className="voltar">
                <img src={icon_arrow} alt="Voltar" />
            </button>
        </Link>
            <Link to="/cadastrar-imovel" className='semsublinhado'>
            {/* {showButton && ( */}
                <button className={`cadastrar-imovel ${!showButton ? 'hidden' : ''}`}>
                    <img src={icon_plus} alt="" />
                    <h1>Cadastrar imóvel</h1>
                </button> 
            {/* )} */}
            </Link>
       
        </div>

        {showTitle && (
            <div className="titulo">
                <h1>Bem-vindo, Raphael!</h1>
            </div>
        )}

    </nav>
  )
}

export default Cabecalho;
