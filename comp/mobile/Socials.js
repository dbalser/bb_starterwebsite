import React from 'react'

export default () => {

	return (
		<div id = 'Socials'>

			<a className = "btn" id = "insta" href = "">Instagram</a>
			<a className = "btn" id = "linkedin" href = "">LinkedIn</a>
			<a className = "btn" id = "github" href = "">Github</a>


			<style jsx >{`

				#Socials {
					width: 100%;
					height: 300px;
					margin: 0;
				}
				#insta {
					margin-left: 5%;
				}
				.btn {
					border-radius: 10px;
					font-size: 3em;
					font-weight: bold;
					margin: 3%;
					padding: 2% 3%;
					text-decoration: none;
					position: relative;
					top: 6vh;
					color: #39363D;
				}


	    `}</style>

		</div>
	)
}
