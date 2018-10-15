import React from 'react'
import DisplayPiece from './DisplayPiece'
import DisplayInfo from './DisplayInfo'
const UpArrow = '/static/img/arrow-up.png'
const DownArrow = '/static/img/arrow-down.png'


class ShowCase extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
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

				<DisplayInfo  SelectedInfo = {this.state.SelectedInfo}
			 	AnimeName = {this.state.AnimeName}
			 	ChangeCurrentView = {this.ChangeCurrentView.bind(this)} />

				<div id = "AllPieces">
					{this.props.Info.map((DisplayItem, i) => {

						return (<DisplayPiece key = {i}
							DisplayItem = {DisplayItem}
							AnimeName = {this.state.AnimeName}
							ChangeCurrentView = {this.ChangeCurrentView.bind(this)}
							/>)
						})
					}
					<div id = "aSpacerToScrollBetter"></div>
				</div>

				<style jsx >{`

					#ShowCase {
						height:	 1530px;
						overflow: hidden;
					}
					#AllPieces {
						width:100vw;
						height: 1700px;
						overflow: scroll;
						display: inline-block;
						position: relative;
						bottom: 1630px;
						box-sizing: padding-box;
				    -moz-box-sizing: padding-box;
				    -webkit-box-sizing: padding-box;
					}
					#aSpacerToScrollBetter {
						width:100%;
						height:200px;
					}
		    `}</style>

			</div>
		)
	}
}

export default ShowCase
