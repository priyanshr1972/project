import React from 'react'
import "./Section2.css"
import img1 from './images/trello1.webp'
const section2 = () => {
  return (
    <div className="secondsec">
    <p className="t1">TRELLO 101</p>
    <h2 className="t2">A productivity powerhouse</h2>
    <div className="t3">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of
      who’s doing what
      and what needs to get done. Learn more in our <a className="linkForGetting" href="https://trello.com/guide">guide for
        getting started.</a></div>
    <div className="secsec">
      <div className="cardst">
        <div className="carder cardercopy">
          <div className="a2 eles" data-imagurl={img1}>
            <p className="etext">bf</p>
          </div>
          <div>
            <h3>Boards</h3>
            <p className="ct">Trello boards keep tasks organized and
              work moving forward. In a glance, see
              everything from "things to do" to "aww
              yeah, we did it!"</p>
          </div>
        </div>
        <div className="carder cardercopy">
          <div className="eles" data-imagurl="./images/img2.webp">
            <p className="etext">bf</p>
          </div>
          <div>
            <h3>Lists</h3>
            <p className="ct">The different stages of a task. Start as
              simple as To Do, Doing or Done-or build
              a workflow custom fit to your team's
              needs. There's no wrong way to Trello.</p>
          </div>
        </div>
        <div className="carder cardercopy">
          <div className="eles" data-imagurl="./images/trello3.webp">
            <p className="etext">bf</p>
          </div>
          <div>
            <h3>Cards</h3>
            <p className="ct">Trello boards keep tasks organized and
              work moving forward. In a glance, see
              everything from "things to do" to "aww
              yeah, we did it!"</p>
          </div>
        </div>
      </div>
      <div className="imagesinthis">
        <img id="img1" className="image-transition" src={img1}></img>
      </div>
    </div>
  </div>
  )
}

export default section2
