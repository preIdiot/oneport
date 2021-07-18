import React from "react";
import "./LinkSection.scss";

import LinkContainer from "../link-container/LinkContainer";

/**
 *  @description All the components inside linkSection
 *  Frame in Figma gets imported here.
 * Such as linkContainer and button will be imported here
 * and used accordingly and this component (linkSection)
 * will be imported in the App.js for final render.
 */

function LinkSection() {
	return (
		<div className="LinkSection MainContainer__slides">
			<LinkContainer />
		</div>
	);
}

export default LinkSection;
