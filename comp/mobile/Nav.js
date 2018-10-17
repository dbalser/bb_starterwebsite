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
					margin:3% 5%;;
					font-size: 8vw;
				}

    	`}</style>
		</nav>
	)
}

export default Nav
