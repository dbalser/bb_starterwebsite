import React from 'react'
import DisplayPiece from './DisplayPiece'
import DisplayInfo from './DisplayInfo'



class ShowCase extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			Info:  [{
					title: "dog1",
					pic: '/static/img/dog1.jpg',
					desc: "Are you hungry for apples? ARE YOU HUNGRY FOR APPLESSS!? Nice to wheat you! Are you kidding? I'm hoping I can get to both of them, Rick! Lick, lick, lick my balls!"
				},{
					title: "dog2",
					pic: '/static/img/dog2.jpeg',
					desc: "Like nothing shady ever happened in a fully furnished office? You ever hear about Wall Street Morty? You know what those guys do in their fancy board"
				},{
						title: "dog3",
						pic: '/static/img/dog3.jpg',
						desc: "but not just put it in my mouth and let it slide down my throat, but really eat it! Remote override engaged. No! Yes. Bypassing override! I am aliiiiiveeeeee… Hello."
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


//	if(this.state.AnimeName === "show") {
	// 	return null
	// }
// {this.state.SelectedInfo && this.state.AnimeName === "show"  ? <DisplayInfo  SelectedInfo = {this.state.SelectedInfo}
// AnimeName = {this.state.AnimeName}
// ChangeCurrentView = {this.ChangeCurrentView.bind(this)}
// /> : null}
export default ShowCase
