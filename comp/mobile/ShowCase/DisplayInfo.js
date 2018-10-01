import React from 'react'
import {findDOMNode} from 'react-dom';

export default ({SelectedInfo, AnimeName, ChangeCurrentView}) => {

		return (
			<div id = "DisplayInfo" className = {AnimeName} onClick = {() => ChangeCurrentView(false)}>

				<h1 className = {AnimeName + "H1"}>{SelectedInfo ? SelectedInfo.title.toUpperCase() : ""}</h1>

				<p>{SelectedInfo ? SelectedInfo.desc : ""}</p>

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
						font-size: 3.5vw;
						padding: 4.5%;
						background: #56515C;
					}

					p {
						padding: 3.5% 5%;
						font-size: 1.6vw;
						line-height:50px;
						letter-spacing: 1.3px;
					}



				`}</style>
			</div>
		)
}
