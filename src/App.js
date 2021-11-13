import React, { Component } from 'react';
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
          <h1>Free Programming Books</h1>
          <input type="text"></input>
        </div>
      </div>
    );
  }
}
 
export default App;