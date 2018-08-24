import Link from 'next/link'
import Nav from '../comp/Nav'
import MainCSS from '../css/MainCSS'

const index = () => {

	return (

		<div id = "wrapper">
			<MainCSS/>
			<Nav/>

			Hello World

			{' '}

			<Link href="/aboutUs">
	      <a>See About us</a>
	    </Link>

		</div>
	)
}


export default index
