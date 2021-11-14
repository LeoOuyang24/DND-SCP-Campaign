import React, { Component } from 'react';
import { Link } from "react-router-dom";


const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content"
    }
  }

 
  render() {
    return (
      <div>
        <div id="frontPage">
          <h1>The Foundation Archives</h1>
        </div>
		<nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/expenses">Expenses</Link>
      </nav>
      </div>
    );
  }
}
 
export default App;