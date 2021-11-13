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

	async f1()
	{
		return await axios.get('https://raw.githubusercontent.com/Senior-Design-2021-Ebook-Team/markdown-parser/main/fpb.json')
	}

  asyncCall = async () => {
    const result = await this.f1();
	return result
  }

 
  render() {
    this.asyncCall().then(json => console.log(json.data));
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