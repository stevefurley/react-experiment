import React, { Component } from "react";


// on component per file is best
class MobileMenu extends Component {
  // var A = 65; // ASCII character code

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i))
    };
  }

  handleClick(e) {
    this.setState({
      justClicked: e.target.dataset.letter
    });
  }

  render() {
    return (

        <ul >asdasddsadsasaddsa
        <li>Home</li>
        <li>about</li>
        <li>Home</li>
        </ul>

    );
  }
}


export default MobileMenu;
