import { Route } from 'react-router-dom'
import React from 'react'
import RadioStationPage from "../components/RadioStationPage"
import {connect} from "react-redux"

class RadioStationRoutes extends React.Component {
        render() {
                return (
                        <div>
                           <Route path="/radio/:radioStation" render = {this.getStation}/>
                        </div>   
                )
        }
        getStation = ({match}) => {
                const radioStation = match.params.radioStation;
                return (
                        <RadioStationPage radioStation  = {this.props.radioList[radioStation] } 
                                          key = {radioStation}
                        />
                );
        }
}        

export default connect(state => {return {radioList: state.radioList.radioListObj}})(RadioStationRoutes)