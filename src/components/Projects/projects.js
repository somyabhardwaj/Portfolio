import React from 'react'
import NewsCenter from './NewsCenter.png';
import Texteditor from './Texteditor.png';

const projects = () => {
  return (
    <>
    <h2 id="projects" style={{color:'white'}}  className="text-white  d-flex justify-content-center  align-items-center flex-md-column">My Projects</h2>
      <div className="d-flex justify-content-center  align-items-center ">
      
      <div id="carouselExampleAutoplaying" className=  "d-flex justify-content-center carousel slide w-100" data-bs-ride="carousel">
      
  <div className=  "carousel-inner w-75">
    <div className=  "carousel-item active">
      <img src={NewsCenter} className=  " rounded mx-auto d-block w-100" alt="..."/>
    </div>
    <div className=  "carousel-item">
      <img src={Texteditor} className=  "rounded mx-auto d-block w-100" alt="..."/>
    </div>
    <div className=  "carousel-item">
      <img src={NewsCenter} className=  "rounded mx-auto d-block w-100" alt="..."/>
    </div>
  </div>
  <button className=  "carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className=  "carousel-control-prev-icon" aria-hidden="true"></span>
    <span className=  "visually-hidden">Previous</span>
  </button>
  <button className=  "carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className=  "carousel-control-next-icon" aria-hidden="true"></span>
    <span className=  "visually-hidden">Next</span>
  </button>
</div>
      </div>
    </>
  )
}

export default projects
