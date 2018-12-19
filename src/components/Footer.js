import React, { Component } from "react";

class Footer extends Component {
  render() {
      //console.log(this.props);
      const title = this.props.jsonData.title.rendered;
      const image = this.props.jsonData.acf.homepage_header[2].background_image.sizes.slider_desktop;
    return (
      <div>
      footer here
      {title}
      <img src={image} />
      {title}
      <img src={image} />
      </div>
    );
  }
}

export default Footer;
