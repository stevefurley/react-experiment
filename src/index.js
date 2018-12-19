import React from "react";
import { render } from "react-dom";

import "./stylesheets/styles.scss";


import MobileMenu from "./components/MobileMenu";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends React.Component {


  constructor() {
    super();
    this.state = { data: [] };
  }


  async componentDidMount() {
    try {
      const response = await fetch('https://stevefurley.co.uk/wp-json/wp/v2/pages/2');//https://stevefurley.co.uk/distribution/json_for_page_2.json
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json, mode: 'view' });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if(this.state.mode === 'view') {

      var header = 'Header';
      var mobileMenu = 'mobileMenu';
      var mainContent = 'MainContent';
      var contact = 'Contact';
      var footer = 'Footer';

      var jsonDataInfo = this.state.data;

      return (
        <div>

        <nav className='mobile-menu'>
        {mobileMenu === "MobileMenu" && <MobileMenu jsonData={this.state.data} />}
        </nav>

        <div className='wrap'>


        <header>
        {header === "Header" && <Header jsonData={this.state.data} />}
        </header>



        <div className='main-container'>
        {mainContent === "MainContent" && <MainContent jsonData={this.state.data} />}
        </div>

        <footer>
        {contact === "Contact" && <Contact  jsonData={this.state.data} />}
        {footer === "Footer" && <Footer jsonData={this.state.data} />}
        </footer>

        </div>
        </div>
      );
    } else {
      return null;
    }
  }

}

render(<App/>, window.document.getElementById('root'));
