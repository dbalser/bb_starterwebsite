import React from 'react'
import {findDOMNode} from 'react-dom';

export default ({SelectedInfo, AnimeName, ChangeCurrentView}) => {

		return (
			<div id = "DisplayInfo" className = {AnimeName}>

				<div className = {AnimeName + "H1"}>

					<h1>{SelectedInfo ? SelectedInfo.title.toUpperCase() : ""}</h1>

					<img
						id = "backbtn"
						className = {AnimeName + "BackBtn"}
						src = "/static/img/backbtn(white).png"
						alt="back button"
						onClick = {() => ChangeCurrentView(false)}/>

				</div>

				<p className = "desc">{SelectedInfo ? SelectedInfo.desc : ""}</p>

				<a className = "link" href={SelectedInfo ? SelectedInfo.urlLink : ""} target="_blank"><p>CLICK HERE TO SEE!</p></a>

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
						height: 80vh;
						display: inline-block;
						position: relative;
						z-index: 5;

						//this way makes it easier for the dom to animate and run at 60 fillthegaps
						// source: //https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108
						-webkit-transform: translateX(-100%);
						transform: translateX(-100%);
						transition: transform .8s ease;
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
						-webkit-animation: showH1 1.2s forwards;
					  -moz-animation: showH1 1.2s forwards;
					  -o-animation: showH1 1.2s forwards;
					  animation: showH1 1.2s forwards;
					}

					.showBackBtn {
						-webkit-animation: showBackBtn 20s forwards;
					  -moz-animation: showBackBtn 20s forwards;
					  -o-animation: showBackBtn 20s forwards;
					  animation: showBackBtn 20s forwards;
					}

					h1 {
						display: inline-block;
						font-size: 3.5vw;
						padding: 2%;
						background: #56515C;
					}

					.desc {
						max-height: 230px;
						overflow-y: scroll;
						padding: 1% 3%;
						font-size: 1.6vw;
						line-height:50px;
						letter-spacing: 1.3px;
					}
					::-webkit-scrollbar {
					    width: 0px;  /* remove scrollbar space */
					    background: transparent;  /* optional: just make scrollbar invisible */
					}

					#backbtn {
						width: 5%;
						display: inline-block;
						position: absolute;
						top: 20px;
						left: 93%;
					}

					.link {
						width: 30%;
					}
					.link p {
						font-size: 2vw;
						margin: 1% 3%;
					}
					.link:link {
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
