import React from 'react'
const UsImg = '/static/img/dog1.jpg'

export default () => {

	return (
		<div id = 'AboutUs'>

			<img
				id = "UsImg"
				src = {UsImg}
				alt="about us img"/>


			<p>It's a device Morty, that when you put it in your ear, you can enter people's dreams Morty. Its just like that movie that you keep crowing about. That just sounds like slavery with extra steps. Right, Crocubot. So, you're half cold unfeeling reptile, half also cold equally unfeeling machine? It's like the N word and the C word had a baby, and it was raised by all the bad words for Jews.</p>


			<style jsx >{`

				#AboutUs {
					width:100%;
					height: 50vh;
				}

				#UsImg {
					width: 30%;
					border-radius: 40px;
					margin: 2% 5%;
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
