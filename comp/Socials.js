import React from 'react'

export default () => {

	return (
		<div id = 'Socials'>

			<a className = "button" id = "insta" href = "">Instagram</a>
			<a className = "button" id = "linkedin" href = "">LinkedIn</a>
			<a className = "button" id = "github" href = "">Github</a>


			<style jsx >{`

				#Socials {
					width: 100%;
					height: 100px;
					margin: 0;
				}
				.button {
					border-radius: 10px;
					font-size: 1.5em;
					margin: 5%;
					padding: 1%;
					text-decoration: none;
					position: relative;
					top: 6vh;
				}
				.button:hover {
					-webkit-box-shadow: 0px 0px 144px -9px #FFFFFF;
					-moz-box-shadow: 0px 0px 144px -9px #FFFFFF;
					box-shadow: 0px 0px 144px -9px #FFFFFF;
				}
				#insta {
					margin-left: 25%;
				}

	    `}</style>

		</div>
	)
}
