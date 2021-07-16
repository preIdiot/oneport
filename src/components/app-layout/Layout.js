import React from "react";
import HeroSection from "../hero-section/HeroSection";
import LinkSection from "../link-section/LinkSection";
import "./Layout.scss";

/**
 *  This is the main appLayout for the complete Application. This will be used as a wrapper to the App.js

    This layout represents the main Artboard in Figma (mobile screen 375x812) and this layout will contain the max-width and all those styling to prevent frombreaking in larger screens.
 * @returns 
 */

function Layout() {
	return (
		<div className="appLayout">
			<HeroSection />
			<LinkSection />
		</div>
	);
}

export default Layout;
