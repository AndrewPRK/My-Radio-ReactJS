import React from "react"
import "./styles.css"
import Slider from "react-rangeslider"
import './slider.css'
import ButtonPlay from "./button_play"
import ButtonPrev from "./button_prev"
import ButtonNext from "./button_next"
import MusicLength from "./length"

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVolSlidShow: false
        }
    }

    showVolumeSlider = () => {
        this.setState(
            {
                isVolSlidShow: !this.state.isVolSlidShow
            }
        )
    }

    render() {
        var bg = require(`../../imgs/PlayerImage/${this.props.playerImg}`);
        return (
            <div id = "player-container">
                <div id = "image" style = { { backgroundImage:"url("+bg+")" } }></div>  
                <div id = "player" style = {this.props.togglePrev?{left: "160px"} : {left: "190px"}}>
                    {this.props.togglePrev ? <ButtonPrev togglePrev = {this.props.togglePrev}/> : null}
                    <ButtonPlay playState = {this.props.playState} togglePlay = {this.props.togglePlay} />
                    {this.props.toggleNext ? <ButtonNext toggleNext = {this.props.toggleNext}/> : null}
                </div>
                <div id="volume" >
                    <i className = "fa fa-volume-up" aria-hidden = "true" onClick = {this.showVolumeSlider}></i>
                    {this.state.isVolSlidShow?
                    <Slider orientation="vertical"
                    value={this.props.volume}
                    min={0}
                    max={100}
                    step={1}
                    tooltip={false}
                    onChange={(value) => this.props.onChangeVolume(value)}
                    /> : null}
                </div>
                {this.props.changeMusLen?<MusicLength/> : null}
            </div>
          
        );
    }
}