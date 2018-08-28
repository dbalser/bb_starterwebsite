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
