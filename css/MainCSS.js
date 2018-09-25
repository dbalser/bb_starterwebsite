import React from 'react'

export default () => (
  <div >
    <style jsx global>{`

      body, #wrapper {
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



    `}</style>
  </div>
)
