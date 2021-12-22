import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export function Section(props) {
    return (
      <div className = "section">
        <h2 className = "sectionTitle">
		{props.title}
		</h2>
		<img src = {props.image}/>
		<div className = "sectionMessage">
		{props.message}
		</div>
      </div>
    );
  }
export function ListSubSection(props)
{
	let list = props.list.map((a) => <li>{a}</li>)
	return (
		<div className = "listSubSection">
			{props.ordered === false ? <ul className = "listSubSectionList">{list}</ul> :
							 <ol className = "listSubSectionList">{list}</ol>}
		</div>
	)
}

export function MessageSubSection(props)
{
	return (<div className = "messageSubSection">{props.message}</div>)
}

export function SubSubSection(props)
{
	return (<div className="subSubSection">
			<h4 style={{marginBottom: "1px"}}>{props.title}</h4>
			{props.message}
			</div>
	
	)
}

export function ImageSubSection(props)
{
	return (<div className = "imageSubSection"  style={props.style}> 
				<img src = {props.image} className = "image"/> 
				<div className = "imageCaption"> 
					{props.caption} 
				</div>
			</div>)
}

export function get3Digits(i) //given an int, returns the 3 digit representation
{
	return ((a) => {let str = ""; for (let j = 0; j < a; ++j) str += "0"; return str})( i !== 0 ? 2 - Math.floor(Math.log10(i)) : 2) + (i).toString()
}

export function IntroSubSection(props)
{			
		return (
		<div className = "introSubSection">
			<h1 className = "pageName">
			{"SCP" + get3Digits(props.num) + ": " + props.title}
			</h1>
			<div className = "basicInfo">
				<h4> Containment: </h4> {props.containment} <br/>
				<h4> Object Class: </h4> {props.objClass} <br/>
			</div>
			<div className = "intro">
				<ImageSubSection image={props.mainImage} caption = {props.caption}/>
				<br/>
				<MessageSubSection message={props.intro}/>
			</div>
		</div>)
}

export function AIntroSubSection(props)
{
	return (
		<div className = "introSubSection" className = "aIntroSubSection">
			<h1 className = "pageName">
			{"ASCP" + get3Digits(props.num) + ": " + props.title}
			</h1>
			<div className = "basicInfo">
				<h4> Containment: </h4> {props.containment} <br/>
				<h4> Object Class: </h4> {props.objClass} <br/>
				<h4> Precursor:  </h4> {props.precursor} <br/>
			</div>
			<div className = "intro">
				<ImageSubSection image={props.mainImage} caption = {props.caption}/>
				<br/>
				<MessageSubSection message={props.intro}/>
			</div>
		</div>		
	)
}

export function parseSection(sec)
{
	if (sec.type !== undefined)
	{
		switch (sec.type)
		{
			case 'list':
				return <ListSubSection ordered = {sec.ordered} list = {sec.list}/>
				break;
			case 'message':
				return <MessageSubSection message = {sec.message}/>;
				break;
			case 'image':
				return <ImageSubSection image = {sec.image} caption = {sec.caption}/>
				break;
		}
	}
	return <Section title={sec.title} message={sec.message}/>
}

export function ErrorPage(props)
{
	return (
		<div style={{color:"red",textAlign:"center",marginTop:"0%"}}>
			<h1> 
				YOU DO NOT HAVE THE REQUIRED SECURITY CLEARANCE LEVEL TO ACCESS THIS PAGE
			</h1>
			<h3>
				Security level {props.num} required
			</h3>
			<h3>
				Contact administration if you believe this to be a mistake
			</h3>
		</div>
	)
}

export var baseLink ="/DND-SCP-Campaign/"

export function SCPPage(props)
{
	let a =(props.artificial ? "a" : "")
	return (
		<div className = "SCPPage">
			<div className = "mainInfo">
				{props.elems}
			</div>
			<div className = "pageNav">
				<span className = "pageNavElements">
					{(props.num > 0 ? <NavLink to = {"/" +a + get3Digits(props.num - 1)}> {"<<"} </NavLink> : undefined)}
				</span>
				<span className = "pageNavElements">
					{a + get3Digits(props.num)}
				</span>
				<span className = "pageNavElements">
					{(props.num < 1000 ? <NavLink to = {"/"+a + get3Digits(props.num + 1)}> {">>"} </NavLink> : undefined)}
				</span>
			</div>
		</div>
	)
}
