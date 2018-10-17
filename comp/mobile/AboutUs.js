import React from 'react'

export default ({Info}) => {

	return (
		<div id = 'AboutUs'>

			<img
				id = "UsImg"
				src = {Info.pic}
				alt="about us img"/>


			<p>{Info.txt}</p>


			<style jsx >{`

				#AboutUs {
					width:100%;
				}

				#UsImg {
					width: 70%;
					border-radius: 40px;
					margin: 10% 15%;
				}

				p {
					width:80%;
					padding-bottom: 10%;
					margin-left: 10%;
					font-size: 4.5vw;
					line-height:80px;
					letter-spacing: 2px;
				}

	    `}</style>

		</div>
	)
}
