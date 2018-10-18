
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
			NavInfo: "Brodie Balser",

			MainViewInfo: {
				pic: "/static/img/mistymountain.jpg",
				txt: "WORKING TOWARDS MAKING THE WORLD A BETTER PLACE BY CREATING TOOLS THAT SIMPLIFY."
			},

			ShowCaseInfo:  [{
					title: "NOX - ecomurse site",
					pic: '/static/img/nox.png',
					desc: "This site was built from scratch using React.js, Express, and Stripe. This client needed to sell, track, and draw people to their business. The website's content is completely flexible. With its custom content management system, you can alter most of the website from the admin page.",
					urlLink: "https://noxfit.com/"
				},{
					title: "Coin Stacks",
					pic: '/static/img/coinstacks.png',
					desc: "Cash Stacks is a money management app that I use every day. It is a simple and hands-on solution that is based on the ideas from the book 'The Richest Man in Babylon'. You are able to make 'Pures' that store money for a specific purpose like pay for rent. You do this till all of your money is separated. Then you simply update the amount in a purse as money comes and goes. I built this using React.js and Express with all custom CSS.",
					urlLink: "http://coinstacks.surge.sh/"
				},{
					title: "Dotted Lines",
					pic: '/static/img/dottedlines.png',
					desc: "This is a Generative Art project, made with p5 and Javascript. In this project, every time the page refreshes a random assortment of dots spawns on the screen. When you hover over them they change to a random color. The biggest challenge here was getting the hovering effect. I solved this by taking the coordinates from my mouse and in a way made an invisible box with the mouse in the center of it. Then I took all of the coordinates from ever pixel that made that box and checked to see if there was a dot inside it. If there was I would change the color of the dot.",
					urlLink: "http://dotted_lines.surge.sh/"
				}, {
					title: "Fill the Gaps",
					pic: '/static/img/fillthegaps.png',
					desc: "This is a Generative Art project, made with p5 and Javascript. In this project, every time the page refreshes it is the programmes job to fill the screen horizontally with randomly sized rectangles. The biggest challenge here was getting the squares to not overlap or touch each other. To solve this I took all the coordinates on the x-axis and store them. Every time I want it to create a rectangle I would have it randomly define all of the dimensions for it and randomly decide where it wants to place it. Then I would pretend to place it using the coordinates from the x-axis I stored and check to see if there was room for it. If there was I would place it on the screen and remove the coordinates that it took up in the x-axis from the collection of coordinates I stored.",
					urlLink: "http://fillthegaps.surge.sh/"
				}],

				AboutUsInfo: {
					pic: "/static/img/dog1.jpg",
					txt: "I am a full stack developer, with a particularly interesting front-end development. I am a strong visual person, I enjoy picking out all the details and being able to improve them by coding. I have done projects with Javascript, HTML, CSS,  React, Angular. I have also built backends with Node.js, Express, and Ruby on Rails."
				},

				Email: "balserbrodie@gmail.com",

				Socials: {
					insta: "https://www.instagram.com/londel111/",
					linkedIn: "https://www.linkedin.com/in/brodiebalser/",
					github: "https://github.com/uumoss-bb/"
				}
		}
	}

	// async componentDidMount () {}

	render() {


		console.error("I need to store all the info on the site here...");
		return (

			<MediaQueryProvider >

				<MediaQuery query="(min-device-width: 421px)">
          <Nav Info = {this.state.NavInfo}/>
				  <MainView Info = {this.state.MainViewInfo}/>
				  <ShowCase Info = {this.state.ShowCaseInfo}/>
				  <AboutUs Info = {this.state.AboutUsInfo}/>
				  <Email Info = {this.state.Email}/>
				  <Socials Info = {this.state.Socials}/>
        </MediaQuery>

				<MediaQuery query="(max-device-width: 420px)">
          <NavMobile Info = {this.state.NavInfo}/>
					<MainViewMobile Info = {this.state.MainViewInfo}/>
					<ShowCaseMobile Info = {this.state.ShowCaseInfo}/>
					<AboutUsMobile Info = {this.state.AboutUsInfo}/>
					<EmailMobile Info = {this.state.Email}/>
					<SocialsMobile Info = {this.state.Socials}/>
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
