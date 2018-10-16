import React from 'react'
export default () => {

	return (
		<div id = "Email">

			<div id = "IntroText">
				<p id = "p1">LETS CHAT</p>
			</div>

			<form action="https://formspree.io/zachary.ezra@noxfit.com" method="POST">
				<input className = "Email" type="email" name="_replyto" placeholder="Your Email"/>
				<input className = "Text" type="text" name="message" placeholder="Your Gracfull Words"/>
				<input className="button" type="submit" value="Send"/>
			</form>

			<style jsx >{`

				#IntroText {
					width: 70%;
					margin: 5% 18%;
				}
				p {
					font-size: 7em;
				}

				form {
					width: 80%;
					height: 60%;
					margin-left:8%;
				}

				.Email {
					width: 50%;
					padding: 0px 0px 80px 15agpx;


					-webkit-appearance: none; // this some how makes inset work!?!?!?!
					appearance: none; // this some how makes inset work!?!?!?!
					-webkit-box-shadow: inset 10px 10px 80px -13px #39363D;
					-moz-box-shadow: inset 10px 10px 80px -13px #39363D;
					box-shadow: inset 10px 10px 80px -13px #39363D;
				}

				.Email::placeholder {
					font-size: 5vw;
					padding: 20px 0px 70px 15agpx;
				}

				.Text {
					width: 100%;
					padding: 0px 0px 240px 15agpx;
					margin-left: 3.5%;

					-webkit-appearance: none; // this some how makes inset work!?!?!?!
					appearance: none; // this some how makes inset work!?!?!?!
					-webkit-box-shadow: inset 10px 10px 80px -13px #39363D;
					-moz-box-shadow: inset 10px 10px 80px -13px #39363D;
					box-shadow: inset 10px 10px 80px -13px #39363D;
				}

				.Text::placeholder {
					padding: 40px 0px 210px 15agpx;
					font-size: 5vw;
				}

				input {
					margin: 1%;
					border: none;
					border-radius: 8px;
				}

				.button {
					margin: 0%;
					padding: 1%;
					position: relative;
					top: 0vh;
					left: 70vw;
					font-size: 6vw !important;
					color: #CCCCCC;
					-webkit-appearance: none;
					appearance: none;
				}

	    `}</style>
		</div>
	)
}
