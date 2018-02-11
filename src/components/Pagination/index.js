import React from "react"
import "./styles.css"
import {array_compare} from "../../helpers"

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curPage: 1,
        };
    }

    componentDidMount() {
        const pagArray = this.props.array.slice(0, this.props.elemPerPage);
        this.props.onChange(pagArray);
    }

    componentWillReceiveProps(nextProps) {   
        if (!array_compare(this.props.array, nextProps.array)) {
            this.setState({curPage: 1})
            const pagArray = nextProps.array.slice(0, nextProps.elemPerPage);
            this.props.onChange(pagArray);
        }
    }

    setCurPage(page){
        if(page>0 && page<=this.numberOfPages) {
            this.setState({
                curPage: page
            });
            const pagArray = this.props.array.slice(this.props.elemPerPage * (page - 1), page * this.props.elemPerPage)
            this.props.onChange(pagArray);
        }
    }
   
    render() {
        this.numberOfPages = (Math.ceil(this.props.array.length / this.props.elemPerPage));
        if(Math.ceil(this.numberOfPages) < 2) {
            return null;
        }
        const buttons = [];
        for (let i = 1; i <= this.numberOfPages; i++) {
            buttons.push(<li key = {i}><a title = {i} className = {this.state.curPage === i?"active" : "pagbutton" } 
            onClick = {() => this.setCurPage(i)}>{i}</a></li>);
        }
        return (
            <div className = {"pagination"} id = {"pagination"}>
                <ul>
                    <li><a  title = "First" className = "pagbutton" onClick = {() => this.setCurPage(1)}>&laquo;</a></li>
                    <li><a  title = "Prev" className = "pagbutton" onClick = {() => this.setCurPage(this.state.curPage - 1)}>&lt;</a></li>
                    {buttons}
                    <li><a  title = "Next" className = "pagbutton" onClick = {() => this.setCurPage(this.state.curPage + 1)}>&gt;</a></li>
                    <li><a  title = "Last" className = "pagbutton" onClick = {() => this.setCurPage(this.numberOfPages)}>&raquo;</a></li>
                </ul>
            </div> 
        )
    }   
}