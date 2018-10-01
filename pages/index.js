
import MediaQuery from 'react-responsive';
//components
import MyContext from '../comp/MyContext'
import Nav from '../comp/Nav'
import MainView from '../comp/MainView'
import ShowCase from '../comp/ShowCase/ShowCase'
import AboutUs from '../comp/AboutUs'
import Email from '../comp/Email'
import Socials from '../comp/Socials'
import MainCSS from '../css/MainCSS'
import ColorsCSS from '../css/ColorsCSS'
//mobile components
import NavMobile from '../comp/mobile/Nav'
import MainViewMobile from '../comp/mobile/MainView'
import ShowCaseMobile from '../comp/mobile/ShowCase/ShowCase'
import AboutUsMobile from '../comp/mobile/AboutUs'
import EmailMobile from '../comp/mobile/Email'
import SocialsMobile from '../comp/mobile/Socials'


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

				<MediaQuery maxWidth={500}>

	      </MediaQuery>

				<MediaQuery minDeviceWidth={420}>
					{(matches) => {
					  if (matches) {
					    return (
							<React.Fragment>
								<Nav/>
								<MainView/>
								<ShowCase/>
								<AboutUs/>
								<Email/>
								<Socials/>
							</React.Fragment>
						)
					  } else {
					    return	 (
								<React.Fragment>
									<NavMobile/>
									<MainViewMobile/>
									<ShowCaseMobile/>
									<AboutUsMobile/>
									<EmailMobile/>
									<SocialsMobile/>
								</React.Fragment>
							)
					  }
					}}
					</MediaQuery>

				<MainCSS/>
				<ColorsCSS/>
			</div>
		)
	}
}


export default index
