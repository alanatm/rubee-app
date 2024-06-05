import React from 'react'
import './css/styles.css'


export default function Inicio() {
  return (
    <>
    <div className='bg-body'></div>
    <form action="" method="get" className='form-login'>
        <h1 className='title-login'>App Nutriólogo</h1>
        <p>Ingresa tu correo:</p>
        <input type="email" name="email-us" id="email-us" placeHolder='ejemplo@ejemplo.com' className='all-input input-login' />
        <p>Ingresa tu contraseña:</p>
        <input type="text" className='all-input input-login' placeholder='********' />
        <a href="#" className='letra-chica margen-top'>¿Olvidaste tu contraseña?</a>
        <button type="submit" className='margen-top'>Acceder</button>
    </form>
    </>
  )
}

