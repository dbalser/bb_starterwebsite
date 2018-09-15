import React from 'react'
const mistyIMG = '/static/img/mistymountain.jpg'

export default () => {

	return (
		<div id = 'MainView'>

			<div id = "MainImg"></div>

			<div
				id = "mainText" >

				<p id = 'text'>Some nice text. This text will be a brief description of what this website will give you. Thank you for visiting!</p>

			</div>



			<style jsx >{`

				#MainView {
					height: 92vh;
					overflow: hidden;
				}

	      #MainImg {
	        width: 100%;
					opacity: .7;
			    height: 100%;
					background-image: url(${mistyIMG});
			    background-attachment: fixed;
			    background-position: center;
			    background-repeat: no-repeat;
			    background-size: cover;
	      }

				#mainText {
					position: relative;
					bottom: 50vh;
					width: 50%;
					text-align: center;
					font-size: 2vw;
					margin-left: 25.5%;
				}

	    `}</style>

		</div>
	)
}
