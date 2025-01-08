import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardComp.css'; // Include custom styles

const CardComp = () => {
  return (
    <div>
      <h1 className='discover fw-bold'>Discover the latest <br/> <span className='text-info'>Updates </span>
  from Chrome</h1>
    <div className="d-flex justify-content-around align-items-center m-5">
      
      {/* Card 1 */}
      <div className="card-container">
        <Card className="custom-card">
          <div className="image-container">
            <Card.Img
              variant="top"
              src="https://i.ytimg.com/vi/L1SHfXvk_jQ/maxresdefault.jpg"
              className="card-image"
            />
          </div>
          <Card.Body className="border border-rounded">
            <h1 className="fw-bold">Updates</h1>
            <h2 className="fw-bold">Automatic Updates</h2>
            <Card.Text>
              There’s a new Chrome release every four weeks,
              <br /> making it easy to have the newest <br /> features and a
              faster, safer web browser.
              <br />
              Learn about automatic updates
            </Card.Text>
            <h3 className="text-primary">Learn Automatic Updates</h3>
          </Card.Body>
        </Card>
      </div>

      {/* Card 2 */}
      <div className="card-container">
        <Card className="custom-card">
          <div className="image-container">
            <Card.Img
              variant="top"
              src="https://cdn.vox-cdn.com/thumbor/fH7502JljWCZ__9OqE_Corrgj3g=/0x0:660x440/1400x788/filters:focal(330x220:331x221)/cdn.vox-cdn.com/uploads/chorus_asset/file/6676117/chromelogo.0.jpg"
              className="card-image"
            />
          </div>
          <Card.Body className="border border-rounded">
            <h1 className="fw-bold">Latest</h1>
            <h2 className="fw-bold">New From Chrome</h2>
            <Card.Text>
              Chrome regularly updates with tools and <br /> features that make
              it faster and easier to <br /> use.
            </Card.Text>
            <h3 className="text-primary">Learn what's new on Chrome</h3>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default CardComp;
