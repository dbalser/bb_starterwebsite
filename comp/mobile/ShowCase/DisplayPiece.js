import React from 'react'


export default ({DisplayItem, PiecesBottomNum, AnimeName, ChangeCurrentView}) => {

	return (
		<div id = "DisplayPiece" className = {"hvr-wobble-vertical "  + AnimeName} onClick = {() => ChangeCurrentView(true, DisplayItem)}>

			<div id = "DisplayPic" style = {{backgroundImage: 'url(' + DisplayItem.pic + ')'}}></div>

			<div id = "DisplayTitle">
				<p>{DisplayItem.title}</p>
			</div>

			<style jsx >{`

				.show {
					-webkit-box-shadow: none !important;
					-moz-box-shadow: none !important;
					box-shadow: none !important;
				}

				#DisplayPiece {
					width:85%;
					height: 1420px;
					position: relative;
					bottom: -130px;
					left: 6.5vw;
					margin: 1%;
					margin-bottom: 8%;
					border-radius: 25px;
					-webkit-box-shadow: 7px 15px 61px -6px rgba(57,54,61,1);
					-moz-box-shadow: 7px 15px 61px -6px rgba(57,54,61,1);
					box-shadow: 7px 15px 61px -6px rgba(57,54,61,1);
				}
				#DisplayPic {
					width: 100%;
					height: 1250px;
					overflow: hidden;
					background-position: center;
					background-size: cover;
				}
				#DisplayTitle {
					margin:5%;
					text-align: left;
					font-size: 6vw;
				}

				@-webkit-keyframes hvr-wobble-vertical {
				  16.65% {
				    -webkit-transform: translateY(8px);
				    transform: translateY(8px);
				  }
				  33.3% {
				    -webkit-transform: translateY(-6px);
				    transform: translateY(-6px);
				  }
				  49.95% {
				    -webkit-transform: translateY(4px);
				    transform: translateY(4px);
				  }
				  66.6% {
				    -webkit-transform: translateY(-2px);
				    transform: translateY(-2px);
				  }
				  83.25% {
				    -webkit-transform: translateY(1px);
				    transform: translateY(1px);
				  }
				  100% {
				    -webkit-transform: translateY(0);
				    transform: translateY(0);
				  }
				}
				@keyframes hvr-wobble-vertical {
				  16.65% {
				    -webkit-transform: translateY(8px);
				    transform: translateY(8px);
				  }
				  33.3% {
				    -webkit-transform: translateY(-6px);
				    transform: translateY(-6px);
				  }
				  49.95% {
				    -webkit-transform: translateY(4px);
				    transform: translateY(4px);
				  }
				  66.6% {
				    -webkit-transform: translateY(-2px);
				    transform: translateY(-2px);
				  }
				  83.25% {
				    -webkit-transform: translateY(1px);
				    transform: translateY(1px);
				  }
				  100% {
				    -webkit-transform: translateY(0);
				    transform: translateY(0);
				  }
				}
				.hvr-wobble-vertical {
				  display: inline-block;
				  vertical-align: middle;
				  -webkit-transform: perspective(1px) translateZ(0);
				  transform: perspective(1px) translateZ(0);
				  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
				}
				.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {
				  -webkit-animation-name: hvr-wobble-vertical;
				  animation-name: hvr-wobble-vertical;
				  -webkit-animation-duration: 1s;
				  animation-duration: 1s;
				  -webkit-animation-timing-function: ease-in-out;
				  animation-timing-function: ease-in-out;
				  -webkit-animation-iteration-count: 1;
				  animation-iteration-count: 1;
				}



			`}</style>
		</div>
	)
}
