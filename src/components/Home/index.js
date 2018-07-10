import React, { Component } from 'react';
import './styles.css';
import Tumnus from '../../assets/images/Tumnus.jpg';
import Unicorn from '../../assets/images/UnicornProject.jpeg';
import CSSLogo from '../../assets/images/CSSlogo.jpg';
import JavascriptLogo from '../../assets/images/JavascriptLogo.png';
import HTMLLogo from '../../assets/images/HTMLLogo.jpeg';
import ReactLogo from '../../assets/images/ReactLogo.png';
import AngularLogo from '../../assets/images/AngularLogo.png';
import LanguageTablet from '../../assets/images/LanguageTablets.jpg';
import Accounting from '../../assets/images/accounting.png';
import BabyTraders from '../../assets/images/BabyTraders.jpg';
import MenuBurger from '../../assets/images/MenuBurger.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="banner">
          <div className="top-bar">
            <img className="logo" src={Tumnus} alt="Tumnus Grins" />
            <img className="menu-burger" src={MenuBurger} alt="Menu Icon" />
          </div>
          <div className="banner-text">
            <span className="header-text">Looking for a skilled, fast, flexible React developer?</span>
            {/* Add animated stars: http://bestanimations.com/Signs&Shapes/Stars/gold-star-animation9.gif#.W0NQdmO9XhI.link */}
            <span className="sub-header-text">Good news: you've found her.</span>
            {/* Add animated stars: http://bestanimations.com/Signs&Shapes/Stars/gold-star-animation9.gif#.W0NQdmO9XhI.link */}
          </div>
        </div>
        {/* Intro */}
        <div className="intro">
          <span>I'm Finn.</span>
          <span>I'm a linguist and an entrepreneur. </span>
          <span className="stars">* * * * * * * * *</span>
          <span>I design sleek web apps with efficient, eloquent code,</span>
          <span>and I'm fun to work with while I do it.</span>
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
        {/* FRAMEWORKS SECTION */}
        <div className="frameworks">
          <div className="frameworks-banner">Frameworks</div>
          <div className="frameworks-blurbs">
            {/* FRAMEWORK BLURB */}
            <div className="tech-blurb">
              <img src={ReactLogo} alt="React Logo" />
              <span className="tech-blurb-text">Expertise</span>
            </div>
            {/* FRAMEWORK BLURB */}
            <div className="tech-blurb">
              <img src={AngularLogo} alt="Angular Logo" />
              <span className="tech-blurb-text">Awesomeness</span>
            </div>
          </div>
        </div>
        {/* BLOG SECTION */}
        <div className="blog">
          <span className="temp-blog-section-text">Big Beautiful Brilliant Blog</span>
          <span className="temp-glog-section-subtext">An edifying read</span>
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
          <span className="byline">Copyright 2018 </span>
          <span className="my-name">Finn Thye</span>
          <span classname="byline">All Rights Reserved.</span>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Home;
