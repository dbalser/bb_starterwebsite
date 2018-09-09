import React from 'react'
const mistyIMG = '/static/img/mistymountain.jpg'

export default () => {

	return (
		<div id = 'MainView'>

			<img
				id = "mistyIMG"
				src = {mistyIMG}
				alt="Smiley face" />


			<div
				id = "mainText" >

				<p id = 'text'>Some nice text. This text will be a brief description of what this website will give you. Thank you for visiting!</p>

			</div>






			<style jsx >{`

				#MainView {
					height: 92vh;
					overflow:hidden;
					-webkit-box-shadow:  inset 0px -13px 103px -6px rgba(57,54,61,1);
					-moz-box-shadow:  inset 0px -13px 103px -6px rgba(57,54,61,1);
					box-shadow:  inset 0px -13px 103px -6px rgba(57,54,61,1);
				}

	      #mistyIMG {
	        width: 100%;
					opacity: .7;
	      }

				#mainText {
					position: relative;
					bottom: 80vh;
					width: 50%;
					text-align: center;
					font-size: 2vw;
					margin-left: 25.5%;
				}

	    `}</style>

		</div>
	)
}
