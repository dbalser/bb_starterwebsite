import React from 'react'
import DisplayPiece from './DisplayPiece'
import DisplayInfo from './DisplayInfo'
const UpArrow = '/static/img/arrow-up.png'
const DownArrow = '/static/img/arrow-down.png'


class ShowCase extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			Info:  [{

					title: "Project Number 1",
					pic: '/static/img/dog1.jpg',
					desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
				},{
					title: "Project Number 2",
					pic: '/static/img/dog2.jpeg',
					desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
				},{
					title: "Project Number 3",
					pic: '/static/img/dog3.jpg',
					desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
				}, {

						title: "asdf 4",
						pic: '/static/img/dog1.jpg',
						desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
					},{
						title: "Prasdf 5",
						pic: '/static/img/dog2.jpeg',
						desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
					},{
						title: "Proasdfasd 6",
						pic: '/static/img/dog3.jpg',
						desc: "That guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Is he keeping his shoulders square? Oooooooh he's tryin'! That just sounds like slavery with extra steps."
					}],
			CurrentDisplay: false,
			SelectedInfo: null,
			AnimeName: null,
		}
	}

	ChangeCurrentView(bool, SelectedInfo) {

		if(bool) {
			this.setState({
				SelectedInfo: {...SelectedInfo},
				AnimeName: "show"
			})
		}
		else {
			this.setState({
				AnimeName: "hide"
			})
		}
	}


	render() {
		return (
			<div id = 'ShowCase'>

				<div id = "ScrollBtn">
					<p>scroll down</p>
				</div>

				<DisplayInfo  SelectedInfo = {this.state.SelectedInfo}
			 	AnimeName = {this.state.AnimeName}
			 	ChangeCurrentView = {this.ChangeCurrentView.bind(this)} />

				<div id = "AllPieces">
					{this.state.Info.map((DisplayItem, i) => {

						return (<DisplayPiece key = {i}
							DisplayItem = {DisplayItem}
							AnimeName = {this.state.AnimeName}
							ChangeCurrentView = {this.ChangeCurrentView.bind(this)}
							/>)
						})
					}
				</div>

				<style jsx >{`

					#ShowCase {
						height: 80vh;
						overflow: hidden;
					}
					#AllPieces {
						width:100vw;
						height: 89vh;
						overflow: scroll;
						display: inline-block;
						position: relative;
						bottom: 85vh;
					}
					#ScrollBtn {
						width: 100%;
						height: 10vh;
						font-size: 8vw;
						text-align: center;
						position: relative;
						top: 70vh;
						z-index: 10;
						border: solid 1px;
					}
					#ScrollBtn p {
						padding: 3%;
					}
		    `}</style>

			</div>
		)
	}
}

export default ShowCase
