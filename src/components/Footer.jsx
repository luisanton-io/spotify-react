import React from 'react'
import Actions from '../consts/Actions'
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

const mapStateToProps = (state) => state;


const Footer = (props) => {
    console.log(props.albumCover)
    console.log(props)
    return (
        <div className="container-fluid fixed-bottom bg-container pt-1">
            <div className="row">
                <div className="col">
                    {
                        props.location.pathname === '/album/' + props.albumId && (
                            <div className="row text-white">
                                <div className="col-4">
                                    <img
                                        src={props.albumCover}
                                        style={{ height: "5rem", width: "5rem" }}
                                        className="card-img img-fluid"
                                        alt="cover image of album"
                                    />

                                </div>
                                <div className="col d-flex py-3">
                                    <div className="d-flex flex-column justify-content-center">
                                        <small>{props.albumLabel}</small>
                                        <small>{props.playingQueue.nowPlaying.title}</small>
                                        {/* <small>{props.albumTitle}</small> */}
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <FontAwesomeIcon icon={emptyHeart} onClick={() => props.toggleLike(props.playingQueue.playList[props.playingQueue.nowPlaying])}></FontAwesomeIcon>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-12 col-lg-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 playerControls mt-1">
                            <div className="row">
                                <a href="#">
                                    <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                                </a>
                                <a href="#">
                                    <img src="playerbuttons/Previous.png" alt="shuffle" />
                                </a>
                                <a href="#">
                                    <img src="playerbuttons/Play.png" alt="shuffle" />
                                </a>
                                <a href="#">
                                    <img src="playerbuttons/Next.png" alt="shuffle" />
                                </a>
                                <a href="#">
                                    <img src="playerbuttons/Repeat.png" alt="shuffle" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center playBar py-3">
                        <div className="col-12">
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    Vol contrls
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(withRouter(Footer))

