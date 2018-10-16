import React from 'react'

export default () => (
  <div >
    <style jsx global>{`

      body {
        width: 100%;
			  margin: 0 auto -170px;
      }

			* {
				padding:0;
				margin:0;
			}

			.button {
				border-radius: 10px;
				font-size: 1.5em;
				margin: 5%;
				padding: 1%;
				text-decoration: none;
				position: relative;
				top: 6vh;
			}
			.button:hover {
				-webkit-box-shadow: 0px 0px 144px -9px #FFFFFF;
				-moz-box-shadow: 0px 0px 144px -9px #FFFFFF;
				box-shadow: 0px 0px 144px -9px #FFFFFF;
			}

			select, textarea, input[type="text"], input[type="password"],
	    input[type="datetime"], input[type="datetime-local"],
	    input[type="date"], input[type="month"], input[type="time"],
	    input[type="week"], input[type="number"], input[type="email"],
	    input[type="url"]{ font-size: 50px; }

    `}</style>
  </div>
)
