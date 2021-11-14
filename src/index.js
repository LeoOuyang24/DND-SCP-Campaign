import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { Section, SCPPage} from "./routes/format.js";

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";


import SCPs from "./SCPs.js"
import testImage from "./images/test.png";

let routes = [];

for (let i = 0; i < 10; ++i)
{
	routes.push(<Route path={i.toString()} element = {<SCPPage title = {i} mainImage = {testImage} intro = "Special Containment Procedures: Item SCP-173 is to be kept in a locked container at all times. When personnel must enter SCP-173's container, no fewer than 3 may enter at any time and the door is to be relocked behind them. At all times, two persons must maintain direct eye contact with SCP-173 until all personnel have vacated and relocked the container."
		sections = {[
		<Section title = "Class" message = "SCP-179 is a humanoid entity located at a constant distance of approximately 40,000 km from the South polar region of the solar photosphere, locked to the rotation axis of Sol. However, it does not orbit it; the most recent recordings of SCP-179 indicate that it seems to maintain a continuous orbit around the center of the galaxy.Through the combined effort of 43 years of continuous surveying, the external appearance of SCP-179 has been defined as a human female of undetermined ethnic group of between twenty and forty years of age. Its entire bodily surface is covered in or composed of a matte black material. Its hair appears to be composed of this material, measures over 34 km long and is constantly pushed away by solar wind. However, this part of SCP-179 seems to reflect variable amounts of sunlight — this reflection being the phenomenon that indicated its existence to Foundation astrophysicists during 1940. Several markings or tattoos are placed throughout its bodily midline. Judging from their brightness, these markings might be of metallic composition and of a golden hue."/>,
		<Section title = "Ending" message = "deez"/>,
		<Section title = "asdf" message = "ASDF"/>
	]}/>} />);
}

ReactDOM.render(
  <BrowserRouter basename = "/DND-SCP-Campaign">
    <Routes>
      <Route path="/" element={<App/>} />
		  {routes}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
