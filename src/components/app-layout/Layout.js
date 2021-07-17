import React from "react";
import "./Layout.scss";

/**
 * @description This is the main appLayout for the complete
 * Application. This will be used as a wrapper to the App.js.
 * This layout represents the main Artboard in
 * Figma (mobile screen 375x812) and this layout will
 *  contain the max-width and all those styling to prevent
 * frombreaking in larger screens.
 */

function Layout(props) {
	return <div className="appLayout">{props.children}</div>;
}

export default Layout;
