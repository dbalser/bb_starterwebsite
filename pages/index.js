
import { MediaQueryProvider, MediaQuery } from 'react-responsive-hoc';
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


		console.error("I need to store all the info on the site here...");
		return (

			<MediaQueryProvider >
				<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

				<MediaQuery query="(min-device-width: 421px)">
          <Nav/>
				  <MainView/>
				  <ShowCase/>
				  <AboutUs/>
				  <Email/>
				  <Socials/>
        </MediaQuery>

				<MediaQuery query="(max-device-width: 420px)">
          <NavMobile/>
					<MainViewMobile/>
					<ShowCaseMobile/>
					<AboutUsMobile/>
					<EmailMobile/>
					<SocialsMobile/>
        </MediaQuery>

				<MainCSS/>
				<ColorsCSS/>

      </MediaQueryProvider>
		)
	}
}

// <AboutUsMobile/>
// <EmailMobile/>
// <SocialsMobile/>
export default index
