import React from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho'
import { Filtro } from '../../components/Filtro/Filtro';
import { Mensagem } from '../../components/Mensagem/Mensagem';
import { Rodape } from '../../components/Rodape/Rodape';

export const TelaInicial = () => {
  return (
    <div>
        <Cabecalho showButton={true} showTitle={true}/>
        <Filtro />
        <Mensagem />
        <Rodape />
    </div>
  )
}

export default TelaInicial;
