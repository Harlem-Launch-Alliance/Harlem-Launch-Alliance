import React from 'react';

const Gallery = () => {
  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
      <h1>Gallery</h1>
      <img className="responsive-img" src="assets/images/BodyManufacturingCompleted.jpg" />
      <img className="responsive-img" src="assets/images/CX-1 Open.jpeg" />
      <img className="responsive-img" src="assets/images/CX-1.jpeg" />
      <img className="responsive-img" src="assets/images/CX-1PrototypeBodyMolding.jpg" />
      <img className="responsive-img" src="assets/images/HumbleBeginnings.jpg" />
      <img className="responsive-img" src="assets/images/IREC2017Logo.jpg" />
      <img className="responsive-img" src="assets/images/ManufacturingTheFinCan.jpg" />
      <img className="responsive-img" src="assets/images/TheFirstBodyTube.jpg" />
      <img className="responsive-img" src="assets/images/ThingsBeginningToTakeShape.jpg" />
    </div>
  )
}

export default Gallery;
