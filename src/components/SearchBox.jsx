import React, { Component } from "react";
import '../css/Search.css';

export class SearchBox extends Component {
	render() {
		return (
			<div className="search">
				<div className="searchBox">
					<input type="text" placeholder="Buscar" />
					<i className="fas fa-search"></i>
				</div>
				<div className="userBox">
					<i className="fas fa-user"></i>
                    <p>Pamela L.</p>
				</div>
			</div>
		);
	}
}

export default SearchBox;
