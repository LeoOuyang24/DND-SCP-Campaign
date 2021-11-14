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

export function SCPPage(props){
		
		return (
		<div className = "SCPPage">
			<h1 className = "pageName">
			{props.title}
			</h1>
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