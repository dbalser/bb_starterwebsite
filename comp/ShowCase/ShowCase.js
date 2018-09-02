import React from 'react'
import DisplayPiece from './DisplayPiece'


class ShowCase extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			DisplayInfo:  [{
					title: "dog1",
					pic: '/static/img/dog1.jpg',
					desc: "Are you hungry for apples? ARE YOU HUNGRY FOR APPLESSS!? Nice to wheat you! Are you kidding? I'm hoping I can get to both of them, Rick! Lick, lick, lick my balls!"
				},{
					title: "dog2",
					pic: '/static/img/dog2.jpeg',
					desc: "Like nothing shady ever happened in a fully furnished office? You ever hear about Wall Street Morty? You know what those guys do in their fancy board"
				},{
					title: "Im a cute doggo",
					pic: '/static/img/dog2.jpeg',
					desc: "Like nothing shady ever happened in a fully furnished office? You ever hear about Wall Street Morty? You know what those guys do in their fancy board"
				},{
						title: "dog3",
						pic: '/static/img/dog3.jpg',
						desc: "but not just put it in my mouth and let it slide down my throat, but really eat it! Remote override engaged. No! Yes. Bypassing override! I am aliiiiiveeeeee… Hello."
				}]
		}
	}

	render() {
		return (
			<div id = 'ShowCase'>

				<div id = "EmptySpace"></div>

				{this.state.DisplayInfo.map((DisplayItem, i) => {
					return (<DisplayPiece key = {i} DisplayItem = {DisplayItem}/>)
					})
				}

				<style jsx >{`

					#ShowCase {
						width:100%;
						height: 300px;
					}
					#EmptySpace {
						width:5%;
						display: inline-block;
					}
		    `}</style>

			</div>
		)
	}
}

export default ShowCase
