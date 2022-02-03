import PropTypes from 'prop-types'
import React from 'react'

import sat from '../images/SatHQ copy.png'
import virtual from '../images/virtual-realty.png'
import webcam from '../images/Webcams.jpeg'
import neural from '../images/neural.jpeg'
import chili from '../images/Chili+LB.jpeg'
import me from '../images/me4.jpg'

const satDescrip =
  'Satellite HQ is 2D Virtual Office Space for casual workplace interaction. Users can "bump into" each other in the virtual office, triggering a video call between users. We intended the project to keep people connected in remote working conditions. Stack: Phaser, WebRTC, Socket.io, and Express.'

const virtualDescrip =
  'Virtual Realty is a virtual property sales e-Commerce site. Built with React, Redux, Express, and Sequelize. '

const brainDescrip =
  'I made this collection of experiments with Neural Networks in Brain.JS. They use machine learning to solve the XOR problem, identify color shades, and predict stock market values.'

const webcamDescrip =
  'I built this Smart Webcam with Tensorflow.js. It is a simple implementation of the machine learning model library, COCO-SSD. It can recognize 90 household objects (including cats!) with 75% or higher accuracy. '

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={me} alt="" />
          </span>
          <p>
            LB | (they, them, theirs) | NYC
            <br></br>
            I attended the Grace Hopper Program for Software Development at Fullstack Academy. I was hired into the company as a Solutions Engineer when I graduated, and I currently monitor and improve on Fullstack's admissions automations. 
            These days I mostly work with Hubspot, Zapier, and our own CRM codebase. 
            My schoolwork is available to view
            <a href="#work"> here</a>.
          </p>
          {close}
        </article>
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="project-image" className="image main">
            <a
              href="https://satellite-hq.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={sat} alt="" />
            </a>
          </span>
          <p>{satDescrip}</p>
          <span className="image main">
            <a
              href="https://virtual-realty.herokuapp.com/home"
              target="_blank"
              rel="noreferrer"
            >
              <img className="project-image" src={virtual} alt="" />
            </a>
          </span>
          <p>{virtualDescrip}</p>
          <span className="image main">
            <a
              href="https://github.com/LB-BB/tensorflowjs-smart-webcam"
              target="_blank"
              rel="noreferrer"
            >
              <img className="project-image" src={webcam} alt="" />
            </a>
          </span>
          <p>{webcamDescrip}</p>
          <span className="image main">
            <a
              href="https://github.com/LB-BB/BrainJS"
              target="_blank"
              rel="noreferrer"
            >
              <img className="project-image" src={neural} alt="" />
            </a>
          </span>
          <p>{brainDescrip}</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={chili} alt="" />
          </span>
          <p>
            I'm LB, an escape-room-designer-turned-engineer.
            (The super smart dog above is Chili)
            <br></br>
            <br></br>I was inspired to learn coding by a website called
            <a href="https://www.zooniverse.org/"> Zooniverse</a>. It uses crowdsourcing to interpret complex data (like spotting clots in 10,000 rat brain photos for alzheimers research). I was inspired to learn how one might automate tasks like this. 
            <br></br>
            <br></br>
            When the pandemic arrived, I was busy designing escape rooms for a company in Manhattan. Escape rooms lost some popularity and I was freed up to pursue coding. 
            <br></br>
            <br></br>
            I am currently a solutions engineer with Fullstack Academy, and unit testing has emerged as the part of development I find most enjoyable and most important. I now write the test suite first, usually with Tyepsecript, and the code second. It's just such a joy when it all comes back green. 
            <br></br>
            <br></br>I've seen over 800 films. Let's discuss your favorite!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="https://linkedin.com/lb-bradburn"
                className="icon fa-linkedin"
              >
                <span className="label">Twitter</span>
              </a>
            </li>

            <li>
              <a
                href="mailto:bradburnlb@gmail.com"
                className="icon fa-envelope"
              >
                <span className="label">Twitter</span>
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com/lb_seeing_you"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/lb-bb" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
