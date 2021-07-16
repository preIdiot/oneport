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
			<p className="mainNavigation__links">Links</p>
			<p className="mainNavigation__posts">Posts</p>
			<div className="mainNavigation__borderBottom">
				<div className="borderBottom__activeLine"></div>
				<div className="borderBottom__defaultLine"></div>
			</div>
		</div>
	);
}

export default MainNavigation;
