import Link from 'next/link'
import MyContext from '../comp/MyContext'
import Nav from '../comp/Nav'
import MainView from '../comp/MainView'
import ShowCase from '../comp/ShowCase/ShowCase'
import AboutUs from '../comp/AboutUs'
import Email from '../comp/Email'
import Socials from '../comp/Socials'
import MainCSS from '../css/MainCSS'
import ColorsCSS from '../css/ColorsCSS'


class index extends React.Component {

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	//
	// 	}
	// }
	//
	// async componentDidMount () {}

	render() {
		return (

			<div id = "wrapper">

				<Nav/>
				<MainView/>
				<ShowCase/>
				<AboutUs/>
				<Email/>
				<Socials/>

				<MainCSS/>
				<ColorsCSS/>

			</div>
		)
	}
}


export default index
