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
				}, ],
			CurrentDisplay: false,
			SelectedInfo: null,
			AnimeName: null,
			PiecesBottomNum: 0,
			PiecesMaxBool: 'at min'
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

	ChangePiecesShown(bool) {

		let max = 0
		let PiecesBottomNum = this.state.PiecesBottomNum
		let movesUp = 89.1

		let NumOfInfo = this.state.Info.length
		// this acts like .ceiling its the remander is not 0
		NumOfInfo % 3 === 0 ? null : NumOfInfo += (3 - (NumOfInfo % 3))
		//this caculates max
		for (let i = 1; i <= NumOfInfo; i++) {
			if(i > 3) {
				max += (movesUp / 3)
			}
		}

		//handle going above and bellow max
		if(PiecesBottomNum >= max && bool ) {
			this.setState({
				PiecesMaxBool: 'at max'
			})
			return
		}
		else if (PiecesBottomNum <= 0 && !bool){
			this.setState({
				PiecesMaxBool: 'at min'
			})
			return
		}

		//move pieces up
		if(bool) {
			this.setState({
				PiecesMaxBool: (PiecesBottomNum + movesUp) >= max ? 'at max' : 'in middle', // this looks ahead and decides
				PiecesBottomNum: PiecesBottomNum += movesUp
			})
		}
		//move pieces up
		else {
			this.setState({
				PiecesMaxBool: (PiecesBottomNum - movesUp) <= 0 ? 'at min' : 'in middle', // this looks ahead and decides
				PiecesBottomNum: this.state.PiecesBottomNum -= movesUp
			})
		}
	}

	render() {
		return (
			<div id = 'ShowCase'>


				<DisplayInfo  SelectedInfo = {this.state.SelectedInfo}
			 	AnimeName = {this.state.AnimeName}
			 	ChangeCurrentView = {this.ChangeCurrentView.bind(this)} />

				<img
					id = "UpArrow"
					src = {UpArrow}
					alt="Smiley face"
					onClick = {() => this.ChangePiecesShown(true)}/>

				<img
					id = "DownArrow"
					src = {DownArrow}
					alt="Smiley face"
					onClick = {() => this.ChangePiecesShown(false)}/>

				<div id = "AllPieces">
					{this.state.Info.map((DisplayItem, i) => {

						return (<DisplayPiece key = {i}
							DisplayItem = {DisplayItem}
							PiecesBottomNum = {this.state.PiecesBottomNum}
							AnimeName = {this.state.AnimeName}
							ChangeCurrentView = {this.ChangeCurrentView.bind(this)}
							/>)
						})
					}
				</div>

				<style jsx >{`

					#ShowCase {
						height: 80vh;
						position: relative;
					}
					#AllPieces {
						width:85vw;
						height: 88vh;
						display: inline-block;
						position: relative;
						bottom: 108vh;
						left: 8%;
						overflow: hidden;
					}
					#UpArrow {
						width: 15%;
						z-index: 4;
						position: relative;
						bottom: 75vh;
						left: 83vw;
						visibility: ${this.state.PiecesMaxBool === "at max" || this.state.Info.length === 3 ? "hidden" : "visible"}
					}
					#DownArrow {
						width: 15%;
						z-index: 4;
						position: relative;
						bottom: 40vh;
						left: 68.2vw;
						visibility: ${this.state.PiecesMaxBool === "at min" || this.state.Info.length === 3  ? "hidden" : "visible"}
					}
		    `}</style>

			</div>
		)
	}
}

export default ShowCase
