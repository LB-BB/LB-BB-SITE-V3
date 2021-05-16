import PropTypes from 'prop-types'
import React from 'react'

import sat from '../images/SatHQ copy.png'
import virtual from '../images/virtual-realty.png'
import webcam from '../images/Webcams.jpeg'
import neural from '../images/neural.jpeg'
import chili from '../images/Chili+LB.jpeg'
import me from '../images/me.jpeg'

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
            I'm a graduate of the Grace Hopper Program for Software Development
            at Fullstack Academy. I am currently a teaching fellow at FSA,
            mentoring engineers-in-training. You can see my work
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
            I'm LB, a nonbinary escape room designer and puzzle afficianado.
            (The super smart dog above is Chili)
            <br></br>
            <br></br>I became interested in coding when I was in college
            studying environmental science. I found a website called
            <a href="https://www.zooniverse.org/"> Zooniverse</a> that uses
            crowdsourcing to sort through complex data; users are asked to
            perform simple tasks like identifying animals in wildlife cameras or
            transcribing handwritten notes from early marine explorers. These
            tasks could take a researcher a lifetime to get through, and finding
            the site triggered a fascination with automating this type of
            low-level work.
            <br></br>
            <br></br>
            When the pandemic arrived, I was caught up in a different interest
            of mine-- designing escape rooms. I’ve always liked to build fun and
            complex things. When all the escape rooms closed, it was the perfect
            time to finally explore doing that digitally.
            <br></br>
            <br></br>
            During my time as an engineer, as a user I’ve been struck by the
            amount of poorly tested software out there. Unit testing has emerged
            as a crucial element that often gets overlooked until it’s a real
            problem. I’m looking to add my skills to a test engineering and
            strategy team.
            <br></br>
            <br></br>I have also seen 600+ films. Let's discuss your favorite!
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
          {/* <form method="post" action="mailto:bradburnlb@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
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
