import React from 'react'
import { Component } from 'react'
import  RadioList  from './RadioList'
import {ObjToArr, unique} from "../../helpers"
import radioListHeader_img from "../../imgs/header/radioListHeader.jpg"
import {loadRadioList} from "../../AC"
import {connect} from "react-redux"
import Loader from "../Loader/Loader"
import Search from "../Search"
import Select from "../Select"
import Pagination from "../Pagination"


 class RadioListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resSearch: [],
            resSelect: '',
            resPagination: []
        }
        this.changeSearch = this.changeSearch.bind(this);
    };

    componentWillMount = () => {
        const{loaded, loading, loadRadioList} = this.props;
        if(!loaded &&! loading) loadRadioList();
        if(!this.state.resSearch.length && this.props.loaded) {
            this.setState({resSearch: this.props.radioList.map((radio) => radio.name)})
        }
    }

    componentWillReceiveProps(nextProps) {
        if(!this.state.resSearch.length && nextProps.loaded){
            this.setState({resSearch:nextProps.radioList.map((radio) => radio.name)})
        }
    }

    changeSearch(res) {
        this.setState({
            resSearch: res
        })
    }

    render() {  
        const filtredBySelected = this.props.radioList.filter(radio => {
            return (!(this.state.resSelect && this.state.resSelect.value) || 
            this.state.resSelect.value === radio.musicStyle)
        }); 
        const filtredRadios = filtredBySelected.filter(radio => {
            return(this.state.resSearch.length && this.state.resSearch.includes(radio.name));
        }); 
        const paginatedRadios = this.props.radioList.filter(radio => {
            return(this.state.resPagination.length && this.state.resPagination.includes(radio.name));
        }); 
        return (
            <div className="radiolist-container" >
                <img src = {radioListHeader_img} className = {"radioListHeader_img"} alt={"radioListHeader"}/>
                {this.props.loaded ?
                <div>
                    <Search value = {this.props.radioList.map(radio => radio.name)} 
                            onChange = {selected => this.changeSearch(selected)}/>
                    <Select radios = {unique(this.props.radioList.map(radio => radio.musicStyle))} 
                            selection = {this.state.resSelect && this.state.resSelect.value} 
                            hendleChange = {(selected) => this.setState({resSelect: selected})}/>
                    {paginatedRadios.length ? <RadioList radios = {paginatedRadios }/>:
                    <div className="not-found"><h1 >Not Found</h1></div>}
                    <Pagination array = {filtredRadios.map(radio => radio.name)} elemPerPage = {8} 
                                onChange={(resPagination) => this.setState({resPagination: resPagination})} />
                </div> :
                <div className="radiolist-loader"><Loader /></div>}
            </div>
        )
    }

}
export default connect((state) => {
    return {
        radioList: ObjToArr(state.radioList.radioListObj),
        loading: state.radioList.loading,
        loaded: state.radioList.loaded};}, 
    {loadRadioList})(RadioListContainer)