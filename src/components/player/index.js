import React from "react"
import PlayerPresenter from "./presenter"

export default class PlayerContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: true,
        volume: 1
      }
      this.togglePlay = this.togglePlay.bind(this);
    }

    componentWillMount() {
      this.player = this.playerInatialization(this.props.radioSrc);
      this.player.preload = "metadata";
    }

    componentWillUpdate(nextProps, nextState) {
      if(this.state.playing!==nextState.playing) {
        
        if(this.state.playing) {
          this.player.play()
        }
        if(!this.state.playing) {
          this.player.pause();
          this.player.src = this.player.src;
        }
      }
      if(this.state.volume!==nextState.volume) {
        this.player.volume = nextState.volume;
      }
    }

    componentWillUnmount() {
      this.player.src = ""
      delete(this.player)
    }

    playerInatialization(src) {
      var player = new Audio(src)
       return player;
    }

    togglePlay() {
      this.setState({
        playing: !this.state.playing
      })
    }

    onChangeVolume = (value) => {
      this.setState(
        {
          volume: value / 100
        }
      )
    }
    
    render() {
      return (
        <PlayerPresenter togglePlay = {this.togglePlay} 
          playState = {this.state.playing} 
          volume = {this.state.volume * 100} 
          onChangeVolume = {this.onChangeVolume}
          playerImg = {this.props.radioImg}
        />
      );
    }
}