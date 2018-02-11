import React from "react"
import Player from "../player"
import {loadRadioList} from "../../AC"
import {connect} from "react-redux"
import "./styles.css"
import stationWrapperImage from "../../imgs/st_1.jpg" 
import Loader from "../Loader/Loader"

 class RadioStationPage extends React.Component {

    componentWillMount = () => {
        const{loaded,loading,loadRadioList} = this.props;
        if(!loaded && !loading) loadRadioList();
    }
    render() {
        return (
            <div className="radio-station-container" >
                {this.props.loaded ? 
                <div>
                    <div className ="footer" >
                        <img src = {stationWrapperImage}  className = {"st_1_img"} alt="WrapperImg"/>
                        <div className="player-wrapper">
                            <Player radioSrc = {this.props.radioStation.source} 
                                    radioImg={this.props.radioStation.playerImg}/>
                        </div>
                        <h1 className="radio-name">{this.props.radioStation.name}</h1>   
                    </div>
                    <div className="radio-station-content" ></div>
                </div>:
                <div className="radiopage-loader"><Loader /></div>}
            </div>
        );
    }
} 

export default connect((state) => {
    return {
        loading: state.radioList.loading,
        loaded: state.radioList.loaded};
    }, {loadRadioList})(RadioStationPage)