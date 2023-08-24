import React from 'react'

const Foms = () => {
  return (
    <>
    
    <div id="contact" className="form-div-1 d-flex justify-content-center  align-items-center flex-column">
    <div className=  "fom d-flex justify-content-center  align-items-center flex-column  ">
     <h2 className= "my-2 " >Contact Me</h2>
     
      <div className=  "fom-div">
  <label htmlFor=  "Name" className=  "form-label"></label>
  <input type="text" className=  "form-control" id="Name" placeholder="Please enter you name"/>
</div>
<div className=  "fom-div ">
  <label htmlFor=  "Email" className=  "form-label"></label>
  <input type="email" className=  "form-control" id="Email" placeholder="name@example.com"/>
</div>
<div className=  "fom-div">
  <label htmlFor=  "Number" className=  "form-label"></label>
  <input type="number" className=  "form-control" id="Number" placeholder="Contact number"/>
</div>
<div className=  "fom-div ">
  <label htmlFor=  "Thoughts" className=  "form-label"></label>
  <textarea className=  "form-control" id="Thoughts" rows="3" placeholder="Please share your thoughts here !" ></textarea>
</div>
<div className=" my-3 mx-3">
    <button className="btn btn-primary" type="submit">Submit </button>
  </div>
    </div>
    </div>
    </>
  )
}

export default Foms
