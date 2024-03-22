import React from 'react'
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo1 from './assets/Mylogo11.jpg'
import { useNavigate } from 'react-router-dom';

const Phone = () => {


  return (
    <FloatingWhatsApp
    phoneNumber="+96181680615"
    accountName="Black Horse"
    avatar={logo1}
    allowEsc
    allowClickAway

    
  />
  )
}

export default Phone