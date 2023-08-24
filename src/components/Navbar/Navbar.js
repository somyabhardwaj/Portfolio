import React from 'react'

function Navbar() {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo" id="home">Somya</label>
           
            <ul>
                <li><a href="#About" >About</a></li>
                <li><a href="https://github.com/somyabhardwaj" rel="noreferrer" target="_blank">Github</a></li>
                <li><a href="/"  rel="noreferrer" target="_blank">Certificates</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1T6nwlEul5LCLFDQ2NwzW65p8GRO8kEe1/view?usp=drive_link" rel="noreferrer" target="_blank" >Resume</a></li>
            </ul>
           
        </nav>
    )
}

export default Navbar
