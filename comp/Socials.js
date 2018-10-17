import React from 'react'

export default ({Info}) => {

	return (
		<div id = 'Socials'>

			<a className = "button" id = "insta" href = {Info.insta} target="_blank">Instagram</a>
			<a className = "button" id = "linkedin" href = {Info.linkedIn} target="_blank">LinkedIn</a>
			<a className = "button" id = "github" href = {Info.github} target="_blank">Github</a>


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
