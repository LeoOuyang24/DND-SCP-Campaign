import React, { Component } from 'react';

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
			{props.ordered ? <ul className = "listSubSectionList">{list}</ul> :
							 <ol className = "listSubSectionList">{list}</ol>}
		</div>
	)
}

export function MessageSubSection(props)
{
	return (<div className = "messageSubSection">{props.message}</div>)
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
				return <MessageSubSection message = sec.message/>;
				break;
		}
	}
	return <Section title={sec.title} message={sec.message}/>
}

export function SCPPage(props){
		
		return (
		<div className = "SCPPage">
			<h1 className = "pageName">
			{props.title}
			</h1>
			<div className = "basicInfo">
				<h4> Containment: </h4> {props.containment} <br/>
				<h4> Object Class: </h4> {props.objClass} <br/>
			</div>
			<div className = "intro">
			<img src = {props.mainImage} className = "mainImage"/>
				<div className = "introText">
					{props.intro}
				</div>
			</div>
			<div className = "sections">
				{props.sections}
			</div>
		</div>
		)
	}