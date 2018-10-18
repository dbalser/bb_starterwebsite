import React from 'react'
import {findDOMNode} from 'react-dom';

export default ({SelectedInfo, AnimeName, ChangeCurrentView}) => {

		return (
			<div id = "DisplayInfo" className = {AnimeName}>

				<h1 className = {AnimeName + "H1"}>{SelectedInfo ? SelectedInfo.title.toUpperCase() : ""}</h1>

				<p className = "desc">{SelectedInfo ? SelectedInfo.desc : ""}</p>

				<a className = "link" href={SelectedInfo ? SelectedInfo.urlLink : ""} target="_blank"><p>CLICK HERE TO SEE!</p></a>

				<img
					id = "backbtn"
					className = {AnimeName + "BackBtn"}
					src = "/static/img/backbtn(white).png"
					alt="back button"
					onClick = {() => ChangeCurrentView(false)}/>

				<style jsx >{`

					@keyframes showH1{
					    0%{box-shadow: none}
							50%{box-shadow: none}
							100% {-webkit-box-shadow: 0px 25px 61px -6px rgba(57,54,61,1);
							-moz-box-shadow: 0px 25px 61px -6px rgba(57,54,61,1);
							box-shadow: 0px 25px 61px -6px rgba(57,54,61,1);}
					}

					@keyframes showBackBtn{
					    0%{opacity:0;}
							100% {opacity:1;}
					}

					#DisplayInfo {
						width:100%;
						height: 1530px;
						display: inline-block;
						position: relative;
						z-index: 5;

						//this way makes it easier for the dom to animate and run at 60 fillthegaps
						// source: //https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108
						-webkit-transform: translateX(-100%);
						transform: translateX(-100%);
						transition: transform .5s linear;
						will-change: transform;
					}

					.show {
						-webkit-transform: none !important;
						transform: none !important;
					}

					.hide {
						-webkit-transform: translateX(-100%);
						transform: translateX(-100%);
					}

					.showH1 {
						right: 100vw;
						-webkit-animation: showH1 1s forwards;
					  -moz-animation: showH1 1s forwards;
					  -o-animation: showH1 1s forwards;
					  animation: showH1 1s forwards;
					}

					.showBackBtn {
						-webkit-animation: showBackBtn 20s forwards;
					  -moz-animation: showBackBtn 20s forwards;
					  -o-animation: showBackBtn 20s forwards;
					  animation: showBackBtn 20s forwards;
					}

					#backbtn {
						position:absolute;
						top: 1270px;
						width: 20%;
						display: block;
						margin-top: 0%;
						margin-left: 73%;
					}

					h1 {
						font-size: 8vw;
						padding: 4.5%;
						text-align: center;
					}

					.desc {
						max-height: 800px;
						overflow-y: scroll;
						padding: 10% 5%;
						padding-bottom: 0%;
						font-size: 4.5vw;
						line-height:80px;
						letter-spacing: 2px;
					}

					a {
						font-size: 4.5vw;
						padding: 5%;
						color: red;
					}

					::-webkit-scrollbar {
					    width: 0px;  /* remove scrollbar space */
					    background: transparent;  /* optional: just make scrollbar invisible */
					}

					.link p{
						font-size: 6vw;
						padding: 0% 5%;
					}
					.link:link{
				    background-color: transparent;
				    text-decoration: none;
					}

					.link:visited {
				    background-color: transparent;
				    text-decoration: none;
					}

				`}</style>
			</div>
		)
}
