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

					@keyframes show {
					    0% {right: 300vw;}
					    100% {right: 0.1vw;}
					}
					@keyframes hide{
					    0%{right: 0vw;}
							100% {right: 100vw;}
					}

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
						right: 100vw;
						z-index: 5;
					}

					.show {
						-webkit-animation: show 2s forwards;
					  -moz-animation: show 2s forwards;
					  -o-animation: show 2s forwards;
					  animation: show 2s forwards;
					}

					.hide {
						-webkit-animation: hide 0.5s forwards;
					  -moz-animation: hide 0.5s forwards;
					  -o-animation: hide 0.5s forwards;
					  animation: hide 0.5s forwards;
					}

					.showH1 {
						right: 100vw;
						-webkit-animation: showH1 3s forwards;
					  -moz-animation: showH1 3s forwards;
					  -o-animation: showH1 3s forwards;
					  animation: showH1 3s forwards;
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
