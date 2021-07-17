import React, { useState } from "react";
import "./MainNavigation.scss";

/**
 * This is the mainNagivation component for the Links and Posts/Whatever buttons in heroSection and their swipe + onClick functionalities will be written here.

    This will be imported to the heroSection Component. For visual help use Figma, the frame is named same as the className above.
 * @returns 
 */

function MainNavigation() {

	const [activeNav, setActiveNav] = useState(1)
	
	const activeTab = (id) => {
		setActiveNav(id)
	}

	return (
		<div className="mainNavigation">
			<div className="mainNavigation__navSection">
				<button 
					onClick={() => activeTab(1)} 
					className={activeNav === 1 ? "navSection__links active" : "navSection__links"}>
						Links
				</button>
				<button 
					onClick={() => activeTab(2)} 
					className={activeNav === 2 ? "navSection__posts active" : "navSection__posts"}>
						Posts
				</button>
			</div>
			<div className="mainNavigation__borderBottom">
				{/* <div className="borderBottom__activeLine"></div> */}
				<div className="borderBottom__defaultLine"></div>
			</div>
		</div>
	);
}

export default MainNavigation;
