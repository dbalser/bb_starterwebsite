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
