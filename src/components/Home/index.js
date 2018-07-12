import React, { Component } from 'react';
import './styles.css';
import Tumnus from '../../assets/images/Tumnus.jpg';
import Unicorn from '../../assets/images/UnicornProject.jpeg';
import CSSLogo from '../../assets/images/CSSlogo.jpg';
import JavascriptLogo from '../../assets/images/JavascriptLogo.png';
import HTMLLogo from '../../assets/images/HTMLLogo.jpeg';
import ReactLogo from '../../assets/images/ReactLogo.png';
import LanguageTablet from '../../assets/images/LanguageTablets.jpg';
import Accounting from '../../assets/images/accounting.png';
import BabyTraders from '../../assets/images/BabyTraders.jpg';
import ReactText from '../../assets/images/ReactText.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="banner">
          <div className="banner-text">
            <span className="header-text">Need a fast, flexible <img className="react-text" src={ReactText} alt="React symbol with text" /> developer?</span>
            <span className="sub-header-text">Good news: <span className="found">you've found her.</span></span>
          </div>
        </div>
        {/* Intro */}
        <div className="intro">
          <span>I'm Finn</span>
          <span className="stars">* * * * * * * * *</span> {/*Make this a calligraphy underline*/}
          <span>Developer</span>
          <span>Linguist </span>
          <span>Entrepreneur</span>
          <span className="stars">* * * * * * * * *</span> {/*Make this a calligraphy underline*/}
          <span>I design sleek web applications with React and Redux</span>
        </div>
        {/* PROJECTS SECTION */}
        <div className="projects">
          <div className="projects-banner">
            <span className="projects-title">Main Projects</span>
            {/* Do I want this? <span className="projects-subtitle">These are really relevant, elegant projects that display my competence and creativity.</span>*/}
          </div>
          <div className="projects-row">
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src={Unicorn} alt="Unicorn Game" />
              <span className="project-name">Raise your own baby unicorn</span>
            </a>
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src={LanguageTablet} alt="Language tablet app" />
              <span className="project-name">Save languages with assistive technology</span>
            </a>
          </div>
          <div className="projects-row">
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src={BabyTraders} alt="Babysitting group" />
              <span className="project-name">Get free childcare with a BabyTrading co-op</span>
            </a>
            {/* PROJECT */}
            <a className="individual-project" href="">
              <img src={Accounting} alt="Business charts" />
              <span className="project-name">Forecast business expenses with variable inputs</span>
            </a>
          </div>
        </div>
        {/* TECHNOLOGIES SECTION */}
        <div className="technologies">
          <div className="technologies-banner">Technologies</div>
          <div className="technologies-blurbs">
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <img src={JavascriptLogo} alt="Javascript Logo" />
            </div>
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <img src={HTMLLogo} alt="HTML Logo" />
            </div>
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <img src={CSSLogo} alt="CSS Logo" />
            </div>
            {/* TECH BLURB */}
            <div className="tech-blurb">
              <img src={ReactLogo} alt="React Logo" />
            </div>
          </div>
        </div>
        {/* ADVERTISEMENT (ABOUT & CONTACT SECTION): PHOTO OF OFF THE WALL */}
        <div className="advertisement">
          <div className="about">
            <span className="about-text">Lots of fascinating, true, real stuff</span>
            {/* SOUND FILE */}
          </div>
          <div className="contact">
            <span className="contact-text">Great Stars but how wonderful that you have found me!</span>
            <button>Contact Me</button>
          </div>
        </div>
        {/* FOOTER SECTION */}
        <div className="footer">
          <img className="footer-logo" src={Tumnus} alt="Tumnus Grins" />
          <div className="copyright">
            <span className="byline">Copyright 2018 </span>
            <span className="my-name">Finn Thye</span>
            <span className="byline">All Rights Reserved.</span>
          </div>
          <img className="footer-logo" src={Tumnus} alt="Tumnus Grins" />
        </div>
      </div>
    );
  }
}

export default Home;
