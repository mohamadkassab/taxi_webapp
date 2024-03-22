import React from 'react'
import './mynavbar.css'
import './drawer.css'
import { Link } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";
import { useCookies } from "react-cookie";
import Drawerreact from './Drawerreact'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { useNavigate } from "react-router-dom";



const Mynavbar = (props) => {

  const [isOpen, setIsOpen] = React.useState(false)
  const [cookies,setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const logout = () =>{
    setCookies("access_token","");
    window.localStorage.removeItem("userID");
    navigate("/login");
  }



  return (
  <div>
     
    <div className='navbar'>
      
      <Link to="/" className='logo'>
      </Link>
      <h4 className='imagelogo'> BLACK HORSE</h4>
     
    <div  className="list">
       <li className='l'><Link to="/home">Home</Link></li>
       <li className='l'><Link to="/service">Services</Link></li>
       <li  className='l'><Link to="/contact">Contact</Link></li>
       <li><Link  to="/booking"> <div className='bookbtn'>
       <LocalTaxiIcon/> BOOK NOW
      </div></Link></li>
      
    </div>
   
    <div className='icon'>
   
   {/* {!cookies.access_token ? ( <i className='i2' ><Link to='/login'>signin</Link></i>) :<i className='i2' ><Link onClick={logout}>logout</Link></i>} */}
   
    <i className='i3' onClick={toggleDrawer}><HiMenu/></i>

    
    </div>
    
  </div>
      <div className='drawer'>
      <Drawerreact open={isOpen} onclose={toggleDrawer}/>
        
      </div>

     </div>
    
  )
}

export default Mynavbar