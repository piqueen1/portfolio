import React, { Component } from 'react';
import './styles.css';
import Tumnus from '../../assets/images/Tumnus.jpg';
import Unicorn from '../../assets/images/UnicornProject.jpeg';
import CSSLogo from '../../assets/images/CSSlogo.jpg';
import JavascriptLogo from '../../assets/images/LoveJavascript.jpeg';
import ReactLogo from '../../assets/images/logo.svg';
import HTMLLogo from '../../assets/images/HTMLLogo.jpeg';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="banner">
          <div className="logo">
            <img src={Tumnus} alt="Tumnus Grins" /> 
          </div>
          <div className="banner-text">
            <span className="header-text">Finn is an insightful, talented developer.</span>
            <span className="sub-header-text">Creative. Flexible. Competent. Friendly.</span>
          </div>
          <div />
        </div>
        {/* Intro */}
        <span className="intro">Lots of fascinating, true, real stuff</span>
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
              <img src={Unicorn} alt="Unicorn Game" />
              <span className="project-name">A children's game about raising a baby unicorn</span>
            </a>
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src={Unicorn} alt="Unicorn Game" />
              <span className="project-name">A children's game about raising a baby unicorn</span>
            </a>
          </div>
          <div className="projects-row">
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src={Unicorn} alt="Unicorn Game" />
              <span className="project-name">A children's game about raising a baby unicorn</span>
            </a>
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src={Unicorn} alt="Unicorn Game" />
              <span className="project-name">A children's game about raising a baby unicorn</span>
            </a>
          </div>
        </div>
        {/* TECHNOLOGIES SECTION */}
        <div className="technologies">
          <div className="technologies-banner">
            <span className="technologies-header">Technologies I Use</span>
            <span className="technologies-subtitle">**The Important Stuff**</span>
          </div>
          <div className="technologies-blurbs">
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <img src={JavascriptLogo} alt="Javascript Logo" />
              <span className="tech-blurb-text">Ninjahood</span>
            </div>
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <img src={HTMLLogo} alt="HTML Logo" />
              <span className="tech-blurb-text">Eloquence</span>
            </div>
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <img src={CSSLogo} alt="CSS Logo" />
              <span className="tech-blurb-text">Mastery</span>
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
        <div className="about">
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
