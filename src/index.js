import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { parseSection, SCPPage, get3Digits, ErrorPage} from "./routes/format.js";

import reportWebVitals from './reportWebVitals';
import { BrowserRouter,HashRouter } from "react-router-dom";
import {Routes, Route,Link} from "react-router-dom";


import testImage from "./images/test.png";


async function getRoutes()
{
	let routes = [];
	let baseLink = "SCPs/"
	for (let i = 0; i < 100; ++i)
	{	
			let SCPNum = get3Digits(i); //the number of the SCP, which is always a 3-digit number
			let linkTag = baseLink + SCPNum  + ".js"
			try {
				let result = await import("./" + linkTag)
				routes.push(<Route path = {SCPNum} element = {<SCPPage num = {i} elems = {[result.get(i)]}/>}/>)
			}
			catch (err)
			{
				//console.log("Error: " + err)
				routes.push (<Route path = {SCPNum} element = {<ErrorPage num={3}/>}/>)
			}
			linkTag = "ASCPs/" + "a" + SCPNum + ".js"
			console.log(linkTag)
			try {
				let result = await import("./" + linkTag)
				console.log(result.get(i))
				routes.push(<Route path = {"a" + SCPNum} element = {<SCPPage num = {i} artificial = {true} elems = {[result.get(i)]}/>}/>)
			}
			catch (err)
			{
				console.log("Error: " + err)
				routes.push (<Route path = {SCPNum} element = {<ErrorPage num={3}/>}/>)
			}
			//routes.push(<Route path = {get3Digits(i)} element = {SCPs[i](i)}/>)
	}
	console.log(routes)
	return routes;
}
async function main(){
	ReactDOM.render(
	  <HashRouter>
		<Routes>
			<Route path="/" element={<App/>} />
				{await getRoutes()}
		</Routes>
	  </HashRouter>,
	  document.getElementById('root')
	);
}
main() 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
