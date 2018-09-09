import React from 'react'
import DisplayPiece from './DisplayPiece'
import DisplayInfo from './DisplayInfo'



class ShowCase extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			Info:  [{
					title: "Project Number A",
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
				}],
			CurrentDisplay: false,
			SelectedInfo: null,
			AnimeName: null
		}
	}

	ChangeCurrentView(bool, SelectedInfo) {

		console.log('hit');

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


				<DisplayInfo  SelectedInfo = {this.state.SelectedInfo}
			 	AnimeName = {this.state.AnimeName}
			 	ChangeCurrentView = {this.ChangeCurrentView.bind(this)} />

				{this.state.Info.map((DisplayItem, i) => {

					return (<DisplayPiece key = {i}
						DisplayItem = {DisplayItem}
						AnimeName = {this.state.AnimeName}
						ChangeCurrentView = {this.ChangeCurrentView.bind(this)}
						/>)
					})
				}

				<style jsx >{`

					#ShowCase {
						width:100%;
						height: 80vh;
					}
		    `}</style>

			</div>
		)
	}
}

export default ShowCase
