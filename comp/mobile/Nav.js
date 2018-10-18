import React from 'react'
import Link from 'next/link'

const Nav = ({Info}) => {

	return (
		<nav>

			<h2>{Info}</h2>

			<style jsx>{`

	      nav {
					width: 98%;
					height: 10vh;
					padding:1%;

	      }

				h2 {
					text-align: center;
					margin:1%;
					font-size: 13vw;
				}

    	`}</style>
		</nav>
	)
}

export default Nav
