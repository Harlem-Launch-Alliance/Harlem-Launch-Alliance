import React from 'react';

const About = () => {
  return (
    <div className="row">

      <div className="col s3">
        <div className="divider"></div>
          <div className="deep-purple lighten-2">
            <h5>ABOUT</h5>
          </div>
      </div>

      <div className="col s9">
        <div>
          <div className="divider"></div>
          <div className="section">
            <h5>Section 1</h5>
            <p>Stuff</p>
          </div>
          <div className="divider"></div>
          <div className="section">
            <h5>Section 2</h5>
            <p>Stuff</p>
          </div>
          <div className="divider"></div>
          <div className="section section-white">
            <h5>Section 3</h5>
            <p>Stuff</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;
