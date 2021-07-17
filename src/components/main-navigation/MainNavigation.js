import React from "react";
import "./MainNavigation.scss";

/**
 * @description This is the mainNagivation component for the
 * Links and Posts/Whatever buttons in heroSection and
 * their swipe + onClick functionalities will be written here.
 * This will be imported to the heroSection Component.
 * For visual help use Figma, the frame is named same as
 * the className above.
 */

function MainNavigation(props) {
	const handleClick = (event) =>
		props.setPositionByIndex(parseInt(event.target.id));

	return (
		<div className="mainNavigation">
			<div className="mainNavigation__navSection">
				<button
					id="0"
					className="navSection__item navSection__links navSection__active"
					onClick={handleClick}
				>
					Links
				</button>
				<button
					id="1"
					className="navSection__item navSection__posts"
					onClick={handleClick}
				>
					Posts
				</button>
			</div>
			<div className="mainNavigation__borderBottom">
				<div className="borderBottom__activeLine"></div>
				<div className="borderBottom__defaultLine"></div>
			</div>
		</div>
	);
}

export default MainNavigation;
