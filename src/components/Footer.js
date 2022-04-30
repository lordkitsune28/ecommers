import React from 'react'
import { Footer, Icon } from "../styled/style"

export const Footers = () => {
  return (
    <Footer>
      <div>
        <Icon className='mx-5'>
          <img src="https://res.cloudinary.com/donoutoby/image/upload/v1645847737/sprint2/Component_1_1_dickfu.png" />
          <p>Home</p>
        </Icon>

        <Icon className='position-absolute top-50 start-50 translate-middle'>
          <img src="https://res.cloudinary.com/donoutoby/image/upload/v1645847737/sprint2/Component_1_pjgsr8.png" />
          <p>Estadisticas</p>
        </Icon>

          <Icon className='float-end mx-5 mt-1'>
            <img className='mx-auto' src="https://res.cloudinary.com/donoutoby/image/upload/v1645847737/sprint2/Union_ago7ha.png" />
            <p>Perfil</p>
          </Icon>
      </div>
    </Footer>
  )
}
