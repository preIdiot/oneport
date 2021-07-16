import React from "react";
import "./MainNavigation.scss";

/**
 * This is the mainNagivation component for the Links and Posts/Whatever buttons in heroSection and their swipe + onClick functionalities will be written here.

    This will be imported to the heroSection Component. For visual help use Figma, the frame is named same as the className above.
 * @returns 
 */

function MainNavigation() {
	return (
		<div className="mainNavigation">
			<div className="mainNavigation__navSection">
				<button className="navSection__links">Links</button>
				<button className="navSection__posts">Posts</button>
			</div>
			<div className="mainNavigation__borderBottom">
				<div className="borderBottom__activeLine"></div>
				<div className="borderBottom__defaultLine"></div>
			</div>
		</div>
	);
}

export default MainNavigation;
