import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import './../public/styles/header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header" >
        <img className="logo" src="https://www.ikea.com/us/en/static/ikea-logo.6c4695bad1b57a23e243.svg" /> <span></span>
        <span className="headerTexts"><b>Products</b></span>
        <span className="headerTexts"><b>Rooms</b></span>
        <span className="headerTexts"><b>Deals</b></span>

        <Search />
        <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="13" width="15" x="1" y="3"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path className="cls-1" d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z"/></svg>
        <svg fill="none" height="23" width="23" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <svg height="24px" width="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="Fill"><path d="M10,24a3,3,0,1,0,3,3A3,3,0,0,0,10,24Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,10,28Z"/><path d="M22,24a3,3,0,1,0,3,3A3,3,0,0,0,22,24Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,22,28Z"/><path d="M6.78,6,6.35,4.27A3,3,0,0,0,3.44,2H2V4H3.44a1,1,0,0,1,1,.76L8,19.24H8l.37,1.49A3,3,0,0,0,11.31,23H25V21H11.31a1,1,0,0,1-1-.76l-.12-.5L25,16.25a3,3,0,0,0,2.23-2.19l2-8.06Zm18.55,7.58a1,1,0,0,1-.75.73L9.73,17.8,7.28,8H26.72Z"/></g></svg>


      </div>
    );
  }
}

ReactDOM.render(<Header/>, document.getElementById('static'));
