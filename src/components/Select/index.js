import React from "react"
import Select from "react-select"
import  "./react-select.css"

class FilterSelect extends React.Component {
    render() {
        const options = this.props.radios.map(radio => (
            {
                label: radio,
                value: radio
            }
        ));
        return (
            <Select className="Select" options = {options} 
                    value = {this.props.selection} 
                    onChange = {this.props.hendleChange} 
                    placeholder = "Select music style"
            />
        );
    }
}

export default  FilterSelect