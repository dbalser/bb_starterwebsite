import React from 'react'
const dog1 = '/static/img/dog1.jpg'
const dog2 = '/static/img/dog2.jpeg'
const dog3 = '/static/img/dog3.jpg'

const MyContext = React.createContext()

class ContextProvider extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			show:  [{
					title: "dog1",
					pic: {dog1},
					desc: "Are you hungry for apples? ARE YOU HUNGRY FOR APPLESSS!? Nice to wheat you! Are you kidding? I'm hoping I can get to both of them, Rick! Lick, lick, lick my balls!"
				},{
					title: "dog2",
					pic: {dog2},
					desc: "Like nothing shady ever happened in a fully furnished office? You ever hear about Wall Street Morty? You know what those guys do in their fancy board"
				},{
						title: "dog3",
						pic: {dog3},
						desc: "but not just put it in my mouth and let it slide down my throat, but really eat it! Remote override engaged. No! Yes. Bypassing override! I am aliiiiiveeeeee… Hello."
				}]
		}
	}

	render() {
		return (

			<MyContext.Provider value = {{
				state: this.state
			}} >
				{this.props.children}
			</MyContext.Provider>
		)
	}
}

export default MyContext








//
