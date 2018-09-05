import React from 'react'
import {findDOMNode} from 'react-dom';

export default ({SelectedInfo, AnimeName, ChangeCurrentView}) => {

		return (
			<div id = "DisplayInfo" className = {AnimeName} onClick = {() => ChangeCurrentView(false)}>

				<h1>{SelectedInfo.title}</h1>

				<p>{SelectedInfo.desc}</p>

				<style jsx >{`

					@keyframes show {
					    from {right: 100vw;}
					    to {right: 0vw;}
					}
					@keyframes hide{
					    0%{right: 0vw;}
							100% { top: -1000vh;}
					}

					#DisplayInfo {
						width:100%;
						height: 80vh;
						display: inline-block;
						position: relative;
						z-index:5;
						top:-4%;
					}

					.show {
						right: 100vw;
						-webkit-animation: show 0.5s forwards;
					  -moz-animation: show 0.5s forwards;
					  -o-animation: show 0.5s forwards;
					  animation: show 0.5s forwards;
					}

					.hide {
						right: 0vw;
						-webkit-animation: hide 0.5s forwards;
					  -moz-animation: hide 0.5s forwards;
					  -o-animation: hide 0.5s forwards;
					  animation: hide 0.5s forwards;
					}

					h1 {
						padding: 3% 5%;
					}

					p {
						padding: .5% 5%;
						font-size: 1.6vw;
						line-height:50px;
						letter-spacing: 2px;
					}



				`}</style>
			</div>
		)
}
