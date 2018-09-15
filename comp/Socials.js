import React from 'react'

export default () => {

	return (
		<div id = 'Socials'>

			<a className = "button" id = "insta" href = "https://www.instagram.com/londel111/">Instagram</a>
			<a className = "button" id = "linkedin" href = "https://www.linkedin.com/in/brodiebalser/">LinkedIn</a>
			<a className = "button" id = "github" href = "https://github.com/uumoss-bb">Github</a>


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
				}
				#insta {
					margin-left: 25%;
				}

	    `}</style>

		</div>
	)
}
