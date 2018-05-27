import React, { Component } from 'react';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="banner">
          <span className="header-text">A truly splendid developer.</span>
          <span className="sub-header-text">Creative. Flexible. Competent. Friendly.</span>
        </div>
        <div className="about" id="about">
          <span className="about-text">Lots of fascinating, true, real stuff</span>   
        </div>
        {/* PROJECTS SECTION */}
        <div className="projects">
          <div className="projects-banner">
            <div className="header-text">
              <span className="projects-title">Projects</span>
              <span className="projects-subtitle">These are really relevant, elegant projects that display my competence and creativity.</span>
            </div>
            <button>See all</button>
          </div>
          <div className="projects-row">
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src="" alt="" />
              <span className="project-name"></span>
            </a>
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src="" alt="" />
              <span className="project-name"></span>
            </a>
          </div>
          <div className="projects-row">
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src="" alt="" />
              <span className="project-name"></span>
            </a>
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src="" alt="" />
              <span className="project-name"></span>
            </a>
          </div>
        </div>
        {/* TECHNOLOGIES SECTION */}
        <div className="technologies">
          <div className="technologies-banner">
            <span className="technologies-header"></span>
            <span className="technologies-subtitle"></span>
          </div>
          <div className="technology-blurbs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
