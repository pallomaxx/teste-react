// import React from 'react'
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import './CadastrarImovel.css'

export const CadastrarImovel = () => {
    const [showModal, setShowModal] = useState(false);
  
    const modalAnimation = useSpring({
      transform: showModal ? 'translateY(0%)' : 'translateY(100%)',
      opacity: showModal ? 1 : 0,
      config: { tension: 300, friction: 20 },
    });
  return (
    <>
        <Cabecalho showButton={false} showTitle={false}/>

        <div className="titulo">
            <h1>Para começarmos, precisamos de alguns dados</h1>
        </div>

        <div className='inputs'>
            <div className='input'>
                <input type="text" placeholder='Nome do Imóvel' />
                <h1>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</h1>
            </div>
       
        
            <div className='input'>
                <input type="text" placeholder='Descrição' />
                <h2>0/250</h2>
            </div>
       
        
            <div className='input'>
                <input type="number" placeholder='CEP'/>
            </div>

            <div className='input'>
                <input type="text" placeholder='Endereço'/>
            </div>

            
                <div className='input'>
                <div className="complemento">
                    <input type="number" placeholder='Número'/>
                    <input type="text" placeholder='Complemento'/>
                </div>
            </div>

                <div className='input'>
                <div className="cidade">
                    <input type="text" placeholder='Cidade'/>
                    <label htmlFor="uf" placeholder="UF"><select name='uf'>
                    <option value="" disabled selected>UF</option></select></label>
                </div>
            </div>
            <button className="botao-cadastro" onClick={() => setShowModal(true)}>
          Continuar
        </button>
        </div>

        {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <animated.div style={modalAnimation} className="modal">
            <p>Deseja abandonar o cadastro do imóvel? Esta operação não será salva.</p>
            <div className="modal-buttons">
            <Link to="/" className="exit-button">Sim, sair agora
            </Link>
              <button onClick={() => setShowModal(false)} className="continue-button">
                Não, quero continuar
              </button>
            </div>
          </animated.div>
        </div>
      )}
    </>

    
  )
}
