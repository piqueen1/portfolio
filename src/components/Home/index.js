import React, { Component } from 'react';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="banner">
          <div className="logo">
            <img src="../../assets/images/Tumnus.jpg" alt="Tumnus Grins" height="80px" width="80px" /> 
          </div>
          <div className="banner-text">
            <span className="header-text">Finn is an insightful, talented developer.</span>
            <span className="sub-header-text">Creative. Flexible. Competent. Friendly.</span>
          </div>
        </div>
        {/* PROJECTS SECTION */}
        <div className="projects">
          <div className="projects-banner">
            <div className="projects-header-text">
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
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <span className="tech-blurb-text">Javascript ninjahood</span>
              <img src="" alt="" />
            </div>
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <span className="tech-blurb-text">HTML mastery</span>
              <img src="" alt="" />
            </div>
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <span className="tech-blurb-text">CSS eloquence</span>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        {/* BLOG SECTION */}
        <div className="blog">
          <span className="temp-blog-section-text">Big Beautiful Brilliant Blog</span>
          <span className="temp-glog-section-subtext">An edifying read</span>
        </div>
        {/* ADVERTISEMENT OF ME SECTION: PHOTO OF OFF THE WALL */}
        <div className="contact">
          <span className="contact-text">Great Stars but how wonderful that you have found me!</span>
          <button>Contact Me</button>
        </div>
        {/* ABOUT SECTION */}
        <div className="about" id="about">
          <span className="about-text">Lots of fascinating, true, real stuff</span>
          {/* SOUND FILE */ }
        </div>
        {/* FOOTER SECTION */}
        <div className="footer">
          <span className="byline">Copyright 2018 <span className="my-name">Finn Thye</span> All Rights Reserved.</span>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Home;
