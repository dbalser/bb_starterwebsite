import React from 'react'
import Link from 'next/link'

const Nav = ({Info}) => {

	return (
		<nav>

			<h2>{Info}</h2>

			<style jsx>{`

	      nav {
					width: 98%;
					padding:1%;

	      }

				h2 {
					min-width: 100%;
					margin:0;
				}

    	`}</style>
		</nav>
	)
}

export default Nav
