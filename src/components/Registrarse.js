import React from 'react'
import { Link } from "react-router-dom";
import { Label, Input, A } from "../styled/style"
import "../styled/fondo.css"

export const Registrarse = () => {
    return (
        <div>
            <div className='w-75 mx-auto text-center'>
                <div className='w-75 mx-auto my-5'>
                    <div className='mx-auto'>
                        <img src="https://res.cloudinary.com/donoutoby/image/upload/v1645709431/sprint2/Logo_gwdtil.svg" />
                    </div>
                    <div className='w-100'>
                        <div className='w-50 mx-auto'><h1>Inscribirse</h1></div>
                        <div className='w-100'>
                            <hr />
                            <div>
                                <form>
                                    <Label className='my-3'>Correo electronico</Label>
                                    <Input type="email" placeholder="Ingrese su correo electrónico" />
                                    <Label className='my-3'>Nombre de Usuario</Label>
                                    <Input type="text" placeholder="Ingrese su Nombre de Usuario" />
                                    <Label className='my-3'>Subir Avatar</Label>
                                    <Input type="file" placeholder="Ingrese su Nombre de Usuario" />
                                    <Label className='my-3'>Contraseña</Label>
                                    <Input type="password" placeholder="Ingrese su contraseña" />
                                    <Label className='my-3'>Repita su Contraseña</Label>
                                    <Input type="password" placeholder="Vuelva a Ingresar su contraseña" />
                                </form>
                            </div>
                            <div className='my-5'>
                                <p className='my-5'>¿Ya tienes una cuenta? <Link to="/"><A>Iniciar Sesion</A></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}