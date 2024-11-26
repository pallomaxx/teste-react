import React from 'react'
import './Filtro.css'

export const Filtro = () => {
  return (
    <div className='filtros'>
        <button className='primario'>Todos os flats</button>
        <button className='secundario'>Indisponíveis</button>
    </div>
  )
}
