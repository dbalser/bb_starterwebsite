import React from 'react'
const mistyIMG = '/static/img/mistymountain.jpg'
import $ from 'jquery'

export default () => {


	//---------
	return (
		<div id = 'MainView'>

			<div id = "MainImg"></div>

			<div
				id = "mainText" >

				<p id = 'text'>Some nice text. This text will be a brief description of what this website will give you. Thank you for visiting!</p>

			</div>

			<style jsx >{`

				#MainView {
					height: 1600px;
					overflow: hidden;

					//gradient
					background: -moz-radial-gradient(center, ellipse cover, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 11%, rgba(0,0,0,0) 82%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 11%,rgba(0,0,0,0) 82%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 11%,rgba(0,0,0,0) 82%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
				}

	      #MainImg {
	        width: 100%;
					opacity: .7;
			    height: 100%;
					background-image: url(${mistyIMG});
					//ios disabled the fixed way
			    // background-attachment: fixed;
			    background-position: center;
			    background-repeat: no-repeat;
			    background-size: cover;
	      }

				#mainText {
					position: relative;
					bottom: 1200px;
					width: 60%;
					text-align: center;
					font-size: 7vw;
					margin-left: 20%;
				}

	    `}</style>

		</div>
	)
}
