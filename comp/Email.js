import React from 'react'
export default ({Info}) => {

	return (
		<div id = "Email">

			<div id = "IntroText">
				<p id = "p1">LETS</p>
				<p id = "p2">CHAT</p>
			</div>

			<form action={`https://formspree.io/${Info}`} method="POST">
				<input className = "Email" type="email" name="_replyto" placeholder="Your Email"/>
				<textarea className = "Text" name="message" cols="60" rows="10" placeholder="Your Gracfull Words"></textarea>
				<input className="button" type="submit" value="Send"/>
			</form>

			<style jsx >{`

				#Email {
					height:36vh;
				}

				#IntroText {
					width: 20%;
					height: 100%;
					position: relative;
					top: -2vh;
					left: 2vw;
					display: inline-block;
				}
				p {
					font-size: 5em;
				}
				#p1 {
					margin
				}
				#p2 {

				}

				form {
					width: 60%;
					height: 60%;
					position: relative;
					top: 10%;
					display: inline-block;
				}

				.Email {
					width: 50%;
					height: 5vh;

					-webkit-box-shadow: inset 10px 10px 80px -13px #39363D;
					-moz-box-shadow: inset 10px 10px 80px -13px #39363D;
					box-shadow: inset 10px 10px 80px -13px #39363D;
				}

				.Text {
					width: 100%;
					height: 15vh;
					color: #CCCCCC;
					background: #56515C ;
					border-radius: 8px;
					border-color: transparent;
					font-size: 1.6vw;
					margin-left: 3.5%;
					-webkit-box-shadow: inset 10px 10px 80px -13px #39363D;
					-moz-box-shadow: inset 10px 10px 80px -13px #39363D;
					box-shadow: inset 10px 10px 80px -13px #39363D;
				}

				.Text::placeholder {
					color: #CCCCCC;
					width:100%;
					padding: 5%;
					font-size: 1.6vw;
				}

				input {
					margin: 1%;
					border: none;
					border-radius: 8px;
					font-size: 1.6vw !important;
				}

				input::placeholder {
					width:100%;
					padding: 5%;
					font-size: 1.6vw;
				}

				.button {
					margin: 0%;
					padding: 1%;
					position: relative;
					top: 0vh;
					left: 60vw;
				}

				::-webkit-scrollbar {
						width: 0px;  /* remove scrollbar space */
						background: transparent;  /* optional: just make scrollbar invisible */
				}

	    `}</style>
		</div>
	)
}
