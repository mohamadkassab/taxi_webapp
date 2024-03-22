import React from 'react'
import './contact.css'
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';

const Cdetails = () => {
  return (
    <div className="c2">
    <div className="c2-cards">
      <div className="c-iconbox">
        <FmdGoodRoundedIcon fontSize="large" className="c-icon" />
      </div>
      <h4>Office Address</h4>
      <h6>Dedham</h6>
    </div>
    <div className="c2-cards">
      <div className="c-iconbox">
        <AccessAlarmsRoundedIcon fontSize="large" className="c-icon" />
      </div>
      <h4>Open Time </h4>
      <h6>24/7</h6>
    </div>
    <div className="c2-cards">
      <div className="c-iconbox">
        <AttachEmailRoundedIcon fontSize="large" className="c-icon" />
      </div>
      <h4>Email Us</h4>
      <h6>blackhorse.tls@gmail.com</h6>
    </div>
    <div className="c2-cards">
      <div className="c-iconbox">
        <PhoneInTalkRoundedIcon fontSize="large" className="c-icon" />
      </div>
      <h4> Call Us</h4>
      <h6>+1 781 7773922</h6>
    </div>
  </div>

  )
}

export default Cdetails