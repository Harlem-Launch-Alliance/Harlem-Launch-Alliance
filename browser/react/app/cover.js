import React from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize'

const Cover = () => {
  return (
    <div style={{ backgroundColor: '#F7F7F7' }}>
      <img className="responsive-img" src="assets/images/Messenger-1Team.jpg" />
      <Row className="cover-title">
        <h1 className="center">Harlem Launch Alliance</h1>
        <h3 className="center" style={{ color: '#39185D' }}>Bringing Aerospace Engineering to the East Coast</h3>
      </Row>
      <Row>
        <Col s={4}>
          <Card
            className='small'
            header={<CardTitle image='https://placehold.it/350x150'>Card Title</CardTitle>}
            actions={[<a href='#' key="1" >This is a Link</a>]}>
            This card will have info on PRSG.
          </Card>
        </Col>

        <Col s={4}>
          <Card
            className='small'
            header={<CardTitle image='https://placehold.it/350x150'>Card Title</CardTitle>}
            actions={[<a href='#' key="1">This is a Link</a>]}>
            This card will have info on ASME
          </Card>
        </Col>

        <Col s={4}>
          <Card
            className='small'
            header={<CardTitle
            image='https://placehold.it/350x150'>Card Title</CardTitle>}
            actions={[<a href='#' key="1">This is a Link</a>]}>
            This card will have info on AeroSpace Club.
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cover;

// slider

// <Slider className="z-depth-4">
//         <Slide
//           src="http://lorempixel.com/580/250/nature/1"
//           title="This is our big Tagline!">
//           Here's our small slogan.
//         </Slide>
//         <Slide
//           src="http://lorempixel.com/580/250/nature/2"
//           title="Left aligned Caption"
//           placement="left">
//           Here's our small slogan.
//         </Slide>
//         <Slide
//           src="http://lorempixel.com/580/250/nature/3"
//           title="Right aligned Caption"
//           placement="right">
//           Here's our small slogan.
//         </Slide>
//       </Slider>
//       <section className="cover-section">
//       </section>
