import React from 'react'
export default () => {

	return (
		<div id = "Email">

			<div id = "IntroText">
				<p id = "p1">LETS</p>
				<p id = "p2">CHAT</p>
			</div>

			<form action="https://formspree.io/zachary.ezra@noxfit.com" method="POST">
				<input className = "Email" type="email" name="_replyto" placeholder="Your Email"/>
				<input className = "Text" type="text" name="message" placeholder="Your Gracfull Words"/>
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
					margin-left: 3.5%;

					-webkit-box-shadow: inset 10px 10px 80px -13px #39363D;
					-moz-box-shadow: inset 10px 10px 80px -13px #39363D;
					box-shadow: inset 10px 10px 80px -13px #39363D;
				}

				input {
					margin: 1%;
					border: none;
					border-radius: 8px;
					font-size: 1.6vw !important;
				}

				input::placeholder {
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

	    `}</style>
		</div>
	)
}
