import React from 'react'
import headerLogo from '../logos/Header-logo.png'

export default function Header(){
    return(
        <div className='header'>
            <img src={headerLogo} className='logo'/>
            <h3>My Travel Journal</h3>
        </div>
    )
}