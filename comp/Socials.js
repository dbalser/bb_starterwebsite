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
				#insta {
					margin-left: 28%;
				}

	    `}</style>

		</div>
	)
}
