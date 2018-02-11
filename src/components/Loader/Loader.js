import React, { Component } from 'react';
import loaderSwg from "./loader.svg";

export default class Loader extends Component {
  static defaultProps = {
    height: 200,
    width: 200,
  };

  render() {
    const {height, width} = this.props;
    const style = {
      height,
      width,
    };

    return (
      <img src = {loaderSwg} style = {style} alt = "LOADER"/>
    );
  }
}