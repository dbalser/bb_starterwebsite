import Link from 'next/link'
import Nav from '../comp/Nav'
import MainView from '../comp/MainView'
import MainCSS from '../css/MainCSS'
import ColorsCSS from '../css/ColorsCSS'


class index extends React.Component {

	constructor(props) {
		super(props)
		this.state = {

		}
	}

	async componentDidMount () {}

	render() {
		return (

			<div id = "wrapper">

				<Nav/>
				<MainView/>

				<MainCSS/>
				<ColorsCSS/>

			</div>
		)
	}
}


export default index
