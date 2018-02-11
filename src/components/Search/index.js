import React from "react"
import "./index.css"

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
            inputValue: ""
        }
    }
    filterList = (event) => {
        event.preventDefault();
        this.setState(
            {
                inputValue:event.target.value
            }
        );
        var updatedList = this.props.value.filter(function(item) {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({selectedItems: updatedList});
        this.props.onChange(updatedList);
    };

    componentWillMount() {
        this.setState({
            selectedItems: this.props.value
        });
    }

    render() {
        return (
            <div className="box">
                <div className="container-search">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="text" value={this.state.inputValue} id="search" 
                           placeholder="Search" onChange={this.filterList}/>
                </div>
            </div> 
        );
    }
  }
  
 