import React from 'react'
import icon_home from '../assets/icon-home.png'
import icon_calendar from '../assets/icon-calendar.png'
import icon_library from '../assets/icon-library.png'
import icon_user from '../assets/icon-user.png'
import './Rodape.css'

export const Rodape = () => {
  return (
    <footer>
        <div className='rodape'>
            <img src={icon_home} alt="" />
            <img src={icon_calendar} alt="" />
            <img src={icon_library} alt="" />
            <img src={icon_user} alt="" />
        </div>
    </footer>
  )
}
