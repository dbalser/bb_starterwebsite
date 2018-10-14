
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


//url https://brodiesport.herokuapp.com/

class index extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			ShowCaseInfo:  [{

					title: "Project Number A butt",
					pic: '/static/img/dog1.jpg',
					desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
				},{
					title: "Project Number 5",
					pic: '/static/img/dog2.jpeg',
					desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
				},{
					title: "Project Number B",
					pic: '/static/img/dog3.jpg',
					desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
				}, {

					title: "asdfA",
					pic: '/static/img/dog1.jpg',
					desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
				},{
					title: "Prasdf 5",
					pic: '/static/img/dog2.jpeg',
					desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
				},{
					title: "Proasdfasd",
					pic: '/static/img/dog3.jpg',
					desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
				}]
		}
	}

	// async componentDidMount () {}

	render() {


		console.error("I need to store all the info on the site here...");
		return (

			<MediaQueryProvider >
				<meta name="description" content="We live by NO Excuses"/>
				<meta name="keywords" content="Online Coaching, Fitness, t-shirts"/>
				<meta name="author" content="Brodie Balesr"/>
		    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				<meta name="HandheldFriendly" content="true" />
				<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

				<MediaQuery query="(min-device-width: 421px)">
          <Nav/>
				  <MainView/>
				  <ShowCase Info = {this.state.ShowCaseInfo}/>
				  <AboutUs/>
				  <Email/>
				  <Socials/>
        </MediaQuery>

				<MediaQuery query="(max-device-width: 420px)">
          <NavMobile/>
					<MainViewMobile/>
					<ShowCaseMobile Info = {this.state.ShowCaseInfo}/>
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
