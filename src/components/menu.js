import React from 'react'
import { Link } from "react-router-dom";
import { P, Curso, Targeta, Footer } from "../styled/style"
import { Footers } from "./Footer"

export const Menu = () => {
  return (
    <div>
      <div className='w-75 my-2 mx-auto'>
        <div className='w-50 my-3 mx-auto'>
          <P>Practica tus conocimientos en la categoría que prefieras.</P>
        </div>
        <div className='w-100 mx-auto'>
          <div className='w-75 mx-auto'>
            <Link className='text-decoration-none link-light' to="/html">
              <div className='w-25 mx-auto'>
                <Curso className='ms-5' src="https://res.cloudinary.com/donoutoby/image/upload/v1645841658/sprint2/container_cbkkxj.png" />
                <P>HTML</P>
              </div>
            </Link>
          </div>
          <div className='w-25 mx-auto'>
            <Link className='text-decoration-none link-light' to="/css">
              <Targeta>
                <Curso src="https://res.cloudinary.com/donoutoby/image/upload/v1645841658/sprint2/container_1_xwrggm.png" />
                <P>CSS</P>
              </Targeta>
            </Link>
            <Link className='text-decoration-none link-light' to="/js">
              <Targeta>
                <Curso src="https://res.cloudinary.com/donoutoby/image/upload/v1645843998/sprint2/container_p96fdq.png" />
                <P>JS</P>
              </Targeta>
            </Link>
          </div>
          <div className='w-25 mx-auto'>
            <Link className='text-decoration-none link-light' to="/figma">
              <Targeta>
                <Curso src="https://res.cloudinary.com/donoutoby/image/upload/v1645841658/sprint2/container_3_khorxb.png" />
                <P>FIGMA</P>
              </Targeta>
            </Link>
            <Link className='text-decoration-none link-light' to="/ux">
              <Targeta>
                <Curso src="https://res.cloudinary.com/donoutoby/image/upload/v1645841659/sprint2/container_4_fqugnq.png" />
                <P>UX</P>
              </Targeta>
            </Link>
          </div>
        </div>
      </div>

      <Footers />

    </div>
  )
}
