import React from 'react'
import {findDOMNode} from 'react-dom';

class DisplayInfo extends React.Component {

	constructor(props) {
		super(props)

	}

	render () {
		return (
			<div id = "DisplayInfo" className = "show">

				<p>{this.props.SelectedInfo.title}</p>

				<style jsx >{`

					@keyframes example {
					    from {right: 100vw;}
					    to {right: 0vw;}
					}

					#DisplayInfo {
						width:100%;
						height: 80vh;
						position: relative;
						top:-4%;
						right: 100vw;
						-webkit-animation: example 0.5s forwards;
					  -moz-animation: example 0.5s forwards;
					  -o-animation: example 0.5s forwards;
					  animation: example 0.5s forwards;
					}

					p {
						margin:0;

					}
				`}</style>
			</div>
		)
	}
}

export default DisplayInfo
