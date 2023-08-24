import React from 'react'
import facebook from './Projects/facebook.png';
import insta from './Projects/insta.gif';
import linkedin from './Projects/linkedin.png';
import home from './Projects/home.png';

function Footer () {
  return (
    <footer className="d-flex  align-items-center justify-content-around">
    
     <div >
    <a className="  " rel="noreferrer" target="_blank" href="https://www.facebook.com/somya.bhardwaj.75457/about"><img style={{height:'30px'}} className="Icon" src={facebook} alt="facebook" /></a> 
    <a className="  " rel="noreferrer" target="_blank" href="https://www.instagram.com/somyab3200/"><img style={{height:'25px', borderRadius:'100%'}}  src={insta} alt="Instagram" /></a> 
    <a className="  " rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/somya-bhardwaj8960/"><img style={{height:'34px'}}  src={linkedin} alt="LinkedIn" /></a> 
    <a className="  " href="#home"><img style={{height:'30px'}}  src={home} alt="Home" /></a> 
</div>
<div className=" ">
    <div ><p style={{color:'white'}}  id="gmail">Somyabhardwaj004@gmail.com</p></div>
   </div>
   
    </footer>
  )
}

export default Footer
