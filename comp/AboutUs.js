import React from 'react'
const UsImg = '/static/img/dog1.jpg'

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
					height: 50vh;
				}

				#UsImg {
					width: 15%;
					border-radius: 40px;
					margin: 2% 10%;
				}

				p {
					width:50%;
					position: relative;
					display: inline-block;
					bottom: 8vh;
					font-size: 1.6vw;
					line-height:40px;
					letter-spacing: 1.3px;
				}

	    `}</style>

		</div>
	)
}
