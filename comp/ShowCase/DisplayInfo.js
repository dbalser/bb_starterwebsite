import React from 'react'
import {findDOMNode} from 'react-dom';

export default ({SelectedInfo, AnimeName, ChangeCurrentView}) => {

		return (
			<div id = "DisplayInfo" className = {AnimeName}>

				<div className = {AnimeName + "H1"}>

					<h1 >{SelectedInfo ? SelectedInfo.title.toUpperCase() : ""}</h1>

					<img
						id = "backbtn"
						className = {AnimeName + "BackBtn"}
						src = "/static/img/backbtn(white).png"
						alt="back button"
						onClick = {() => ChangeCurrentView(false)}/>
				</div>

				<p>{SelectedInfo ? SelectedInfo.desc : ""}</p>

				<a href={SelectedInfo ? SelectedInfo.urlLink : ""} target="_blank"><p>CLICK HERE TO SEE!</p></a>

				<style jsx >{`

					@keyframes show {
					    from {right: 100vw;}
					    to {right: 0vw;}
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

					#DisplayInfo {
						width:100%;
						height: 80vh;
						display: inline-block;
						position: relative;
						right: 100vw;
						z-index: 5;
					}

					.show {
						right: 100vw;
						-webkit-animation: show 0.5s forwards;
					  -moz-animation: show 0.5s forwards;
					  -o-animation: show 0.5s forwards;
					  animation: show 0.5s forwards;
					}

					.hide {
						-webkit-animation: hide 0.5s forwards;
					  -moz-animation: hide 0.5s forwards;
					  -o-animation: hide 0.5s forwards;
					  animation: hide 0.5s forwards;
					}

					.showH1 {
						right: 100vw;
						-webkit-animation: showH1 .8s forwards;
					  -moz-animation: showH1 .8s forwards;
					  -o-animation: showH1 .8s forwards;
					  animation: showH1 .8s forwards;
					}

					h1 {
						display: inline-block;
						font-size: 3.5vw;
						padding: 4.5%;
						background: #56515C;
					}

					p {
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
						margin-left: 55%;
						position: relative;
						top: 15px;
					}

					a {
						width: 30%;
						margin-left: 5%;
					}
					a p {
						font-size: 2vw;
					}
					a:link {
				    background-color: transparent;
				    text-decoration: none;
					}

					a:visited {
				    background-color: transparent;
				    text-decoration: none;
					}


				`}</style>
			</div>
		)
}
