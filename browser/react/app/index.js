import React, { Component }from 'react';
import NavBar from './navbar';
import Footer from './footer';
import Cover from './cover';
import Projects from './projects';
import Team from './team';
import About from './about';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'Cover'
    }

    this.handleClickCover = this.handleClickCover.bind(this)
    this.handleClickProjects = this.handleClickProjects.bind(this)
    this.handleClickAbout = this.handleClickAbout.bind(this)
    this.handleClickTeam = this.handleClickTeam.bind(this)
  }

  handleClickCover() {
    this.setState({currentPage: 'Cover'})
  }

  handleClickProjects() {
    this.setState({currentPage: 'Projects'})
  }

  handleClickAbout() {
    this.setState({currentPage: 'About'})
  }

  handleClickTeam() {
    this.setState({currentPage: 'Team'})
  }

  render() {
    return (
      <div>
        <NavBar
          handleClickTeam={this.handleClickTeam}
          handleClickAbout={this.handleClickAbout}
          handleClickProjects={this.handleClickProjects}
          handleClickCover={this.handleClickCover}
        />
        { this.state.currentPage === 'Cover' ? <Cover /> : null }
        <Footer />
      </div>
    )
  }
}

export default App;

//           { this.state.currentPage === 'Projects' ? <Projects /> : null }
//           { this.state.currentPage === 'About' ? <About /> : null }
//           { this.state.currentPage === 'Team' ? <Team /> : null }
