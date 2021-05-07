import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/SongCard.css";

export class SongCard extends Component {
	static propTypes = {};

	render() {
		return (
			<div className="result--card-song">
				<div className="result--photo">
					<i className="fas fa-play"></i>
					<i className="fas fa-ellipsis-v"></i>
				</div>
				<div className="result-info">
					<p>
						21 <br />
						<span>Adele</span>
					</p>
				</div>
			</div>
		);
	}
}

export default SongCard;
