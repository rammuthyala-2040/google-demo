import React from 'react'
import './Exp.css'

const Exp = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-12 col-md-6 text-center fade-in">
          <h1 className=" brow fw-bold text-warning">ENHANCED SAFE <br/> BROWSING</h1>
          <h1>Browse with the <br/> confidence that <br/> you're staying safer <br/> online.</h1>
        </div>
        <div className="col-12 col-md-6 text-center fade-in">
          <img 
            src="https://www.google.com/chrome/static/images/dev-components/extensions-ui.png" 
            alt="Chrome Extension"
            className="img-fluid" // Ensures image is responsive
          />
        </div>
      </div>
    </div>
  )
}

export default Exp
