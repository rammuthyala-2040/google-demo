import React from 'react'
import './Password.css'

const Password = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Password Manager Section */}
        <div className="col-lg-6">
          <div className="card bg-primary text-white animate-slide-in">
            <h6 className="text-uppercase fw-bold">Password Manager</h6>
            <h2 className="fw-bold mt-2">Use strong passwords on every site.</h2>
            <div className="mt-4">
              <input
                type="text"
                className="form-control mb-3 animate-input"
                placeholder="elisa.beckett"
              />
              <input
                type="password"
                className="form-control mb-3 animate-input"
                placeholder="••••••••"
              />
              <div className="saved-password">
                <span>Use Saved Password?</span>
                <span className="saved-password-icon">••••••••</span>
              </div>
              <button className="btn btn-animated mt-3">Save Password</button>
            </div>
          </div>
          

        </div>

        {/* Safety Check Section */}
        <div className="col-lg-6">
          <div className="card bg-light text-dark animate-slide-in">
            <h6 className="text-uppercase fw-bold">Safety Check</h6>
            <h2 className="fw-bold mt-2">
              Check your safety level in real time with just one click.
            </h2>
            <div className="qr-code">
              <p className="text-muted">Get Chrome on your phone</p>
              <img
                src="https://www.google.com/chrome/static/images/v2/gallery/google-safety.webp"
                alt="QR Code"
                className="qr-img animate-qr"
              />
            </div>
            <button className="btn btn-animated mt-3">Run Safety Check</button>
          </div>
        </div>
      </div>
    </div>
      )
}

export default Password
