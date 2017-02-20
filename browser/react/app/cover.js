import React from 'react';
import { Slider, Slide, Card, CardTitle, Row, Col } from 'react-materialize'

const Cover = () => {
  return (
    <div>
      <img className="responsive-img" src="assets/images/Messenger-1Team.jpg" />
      <Row>
        <h1 className="center cover-title">Harlem Launch Alliance</h1>
        <h3 className="center cover-title">Bringing Aerospace Engineering to the East Coast</h3>
      </Row>
      <Row>
        <Col s={4}>
          <Card className='small'
        header={<CardTitle image='http://placehold.it/350x150'>Card Title</CardTitle>}
        actions={[<a href='#' key="1" >This is a Link</a>]}>
        I am a very simple card. I am good at containing small bits of information.
          </Card>
        </Col>

        <Col s={4}>
          <Card className='small'
            header={<CardTitle image='http://placehold.it/350x150'>Card Title</CardTitle>}
            actions={[<a href='#' key="1">This is a Link</a>]}>
            I am a very simple card. I am good at containing small bits of information.
          </Card>
        </Col>

        <Col s={4}>
          <Card className='small'
            header={<CardTitle image='http://placehold.it/350x150'>Card Title</CardTitle>}
            actions={[<a href='#' key="1">This is a Link</a>]}>
            I am a very simple card. I am good at containing small bits of information.
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
