import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { Section, SCPPage} from "./routes/format.js";

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";


import testImage from "./images/test.png";

async function getRoutes()
{
	let routes = [];
	let baseLink = "https://raw.githubusercontent.com/LeoOuyang24/DND-SCP-Campaign/main/src/SCPs/"
	for (let i = 0; i < 10; ++i)
	{	
			let SCPNum = ((a) => {let str = ""; for (let j = 0; j < a; ++j) str += "0"; return str})( i != 0 ? 2 - Math.floor(Math.log10(i)) : 2) + (i).toString(); //the number of the SCP, which is always a 3-digit number
			let linkTag = baseLink + SCPNum  + ".json"
			let result = await fetch(linkTag)
			if (result.ok) {
				result.json().then( json => {console.log(json);routes.push( <Route path = {SCPNum} element = 
				{<SCPPage 
					title = {"SCP " + SCPNum + ": " + json.title} 
					mainImage = {json.mainImage} 
					intro = {json.intro} 
					containment = {json.containment === undefined ? "Unknown" : json.containment} 
					objClass = {json.objClass === undefined ? "Unknown" : json.objClass} 
					sections = {json.sections.map((sections) => <Section title={sections.title} message={sections.message}/>)}

				/>}/>)})
			} 
			else {
				console.log(result.statusText)
			}
	}
	return routes;
}
async function main(){
	ReactDOM.render(
	  <BrowserRouter basename = "/DND-SCP-Campaign">
		<Routes>
		  <Route path="/" element={<App/>} />
		{await getRoutes()}
		</Routes>
	  </BrowserRouter>,
	  document.getElementById('root')
	);
}
main() 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
