import React from 'react';
import { Tabs, Tab } from 'react-materialize';

const Projects = () => {
  return (
    <div>
      <Tabs className='tab-demo z-depth-1'>
          <Tab title="Project 1"></Tab>
          <Tab title="Project 2" active><div className="container section-white">STUFF</div></Tab>
          <Tab title="Project 3">Project 3</Tab>
          <Tab title="Project 4">Project 4</Tab>
      </Tabs>
    </div>
  )
}

export default Projects;
