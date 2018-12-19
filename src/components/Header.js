import React, { Component } from "react";


class Header extends Component {

  render() {
    //console.log(this.props);

    const title = this.props.jsonData.title.rendered;
    const image = this.props.jsonData.acf.homepage_header[0].background_image.sizes.slider_desktop;
    return (
      <div>
      {title}
      <img src={image} />

      </div>
    );
  }
}

export default Header;
