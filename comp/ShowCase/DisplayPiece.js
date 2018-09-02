import React from 'react'


export default ({DisplayItem}) => {

	return (
		<div id = "DisplayPiece" className = "hvr-wobble-vertical">

			<div id = "DisplayPic" style = {{backgroundImage: 'url(' + DisplayItem.pic + ')'}}></div>

			<div id = "DisplayTitle">
				<p>{DisplayItem.title}</p>
			</div>

			<style jsx >{`

				#DisplayPiece {
					width:25%;
					height: 75vh;
					display: inline-block;
					margin: 1%;
					border:solid red;
				}
				#DisplayPic {
					width: 100%;
					height: 65vh;
					overflow: hidden;
					background-position: center;
					background-size: cover;
				}
				#DisplayTitle {
					margin:5%;
					text-align: left;
					font-size: 2vw;
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
