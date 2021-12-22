import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {get3Digits,baseLink} from "./routes/format.js";



const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content"
    }
  }

 
  render() {
	 
	let links = []
	for (let i = 0; i < 100; ++i)
	{
		let num = get3Digits(i)
		links.push (
		<li>
			<a href = {baseLink + num.toString()}>{num}</a>
		</li>)
		
		
	}
    return (
      <div>
        <div id="frontPage">
          <h1>The Foundation Archives</h1>
		 			{links}	
        </div>
		<nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
      </nav>
      </div>
    );
  }
}
 
export default App;