import React from 'react'
import { Link } from "react-router-dom";
import { Label, Input, A } from "../styled/style"
import "../styled/fondo.css"

export const Formulario = () => {
  return (
    <div>
      <div className='w-75 mx-auto text-center'>
        <div className='w-75 mx-auto my-5'>
          <div className='mx-auto'>
            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1645709431/sprint2/Logo_gwdtil.svg" />
          </div>
          <div className='w-100'>
            <div className='w-50 mx-auto'><h1>Iniciar sesión</h1></div>
            <div className='w-100'>
              <Link to="/menu">
              <div type="buttom" to="/menu" className='btn btn-danger w-100'>
                <img className='mx-1 my-1' src="https://res.cloudinary.com/donoutoby/image/upload/v1645722533/sprint2/icons8-google_1_yzcbex.svg" />Continuar con Google
              </div>
              </Link>  
              <hr />
              <div>
                <form>
                  <Label className='my-3'>Correo electronico</Label>
                  <Input type="email" placeholder="Ingrese su correo electrónico" />
                </form>
              </div>
              <div className='my-5'>
                <Link className='my-5' to="/registro"><A>¿se te olvidó tu contraseña?</A></Link>

                <p className='my-5'>¿Aún no tienes una cuenta?<Link to="/regitro"><A>Inscribirse</A></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
