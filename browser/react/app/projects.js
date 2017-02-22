import React from 'react';
import { Tabs, Tab } from 'react-materialize';

const Projects = () => {
  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%', marginBottom: '5%' }}>
      <div>
        <h2>Project Messenger</h2>
        <hr></hr>
        <p>Project Messenger is a two year project tasked with developing rocket manufacturing techniques and recovery systems. The project is managed by the Grove School of Engineering (GSOE) undergraduate engineering club, Planetary & Rocket Science Group (PRSG). The Project Messenger team is currently designing the CX-2 for flight at the 2017 IREC in New Mexico. The CX-2 has a target apogee of 10,000 feet.</p>

        <p>The recovery system is a gyroscope-triggered compressed-gas initiated dual-event (drogue and main chute) deployment. This scheme is ideal for high-altitude flight as the ejection of the parachutes occurs at the optimum deployment angle, and the compress-gas eliminates the need for large black powder charges.</p>

        <p>Messenger-2 is slated to fly in June of 2017, with Messenger-3 and 4 tentatively scheduled for August and January of next year.</p>
      </div>

      <div>
        <h2>Project Aries</h2>
        <hr></hr>
        <p>Project Aries, like Project Messenger, is also a two year project. Aries is tasked with developing hybrid rocket engines powered by paraffin wax – based fuels. The CCNY chapter of the American Society of Mechanical Engineers (ASME) manages the project. The Aries team is currently designing a test engine to experiment with variations of the paraffin wax fuel, as well as beginning preliminary design work for a flight-ready engine.</p>

        <p>The principle research challenges of Project Aries are the experimentation with additives required to make the paraffin wax fuels viable for flight. These additives are meant to accomplish two things: increase the opacity of the fuel to thermal radiation (ensuring that only the layer of paraffin exposed to flame in the combustion chamber melts) and increasing the mechanical strength of the fuel (to ensure the grain does not come apart during combustion).</p>

        <p>The first live-fire tests of the test engine are slated for September of 2017, with the Aries-1 mission scheduled for the summer of 2018 with a target altitude of 30,000 feet.</p>
        <br></br>
      </div>
    </div>
  )
}

export default Projects;
