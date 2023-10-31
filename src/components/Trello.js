import React, { useState, Component } from 'react';
import './Trello.css';
import Trello1 from './images/trello1.webp'
import Trello2 from './images/img2.webp'
import Trello3 from './images/trello3.webp'
class Trello extends Component {
    constructor() {
        super();
        this.state = {
            imagySrc: Trello1,
        };
    }
    handleCardClick = (imagurl, e) => {
        console.log(imagurl);
        this.setState({ imagySrc: imagurl });
    }
render (){
    return(
        <div className = "secondsec" >
        <p className="t1">TRELLO 101</p>
        <h2 className="t2">A productivity powerhouse</h2>
        <div className="t3">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of
            who’s doing what
            and what needs to get done. Learn more in our guide for getting started.</div>
        <div className="secsec">
            <div className="cardst">
                <div className={`carder cardercopy `} onClick={(e) => {
                    this.handleCardClick(Trello1, e)
                }}>
                    <div className={`a2 eles ${this.state.imagySrc === Trello1 ? 'active' : ''}`} data-imagurl="./images/trello1.webp">
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
                <div className={`carder cardercopy`} onClick={(e) => {
                    this.handleCardClick(Trello2, e)
                }}>
                    <div className={`eles  ${this.state.imagySrc === Trello2 ? 'active' : ''}`} data-imagurl="./images/img2.webp">
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
                <div className={`carder cardercopy `} onClick={(e) => {
                    this.handleCardClick(Trello3, e)
                }}>
                    <div className={`eles ${this.state.imagySrc === Trello3 ? 'active' : ''}`} data-imagurl="./images/trello3.webp">
                        <p className="etext">bf</p>
                    </div>
                    <div>
                        <h3>Cards</h3>
                        <p className="ct">Trello boards keep tasks organized and
                            work moving forward. In a glance, see
                            everything from "things to do" to "
                            yeah, we did it!"</p>
                    </div>
                </div>
            </div>
            <div className="imagesinthis">
                <img id="img1" className="" src={this.state.imagySrc} />
            </div>
        </div>
    </div>

    );
    }
}
export default Trello;