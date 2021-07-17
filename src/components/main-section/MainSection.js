import React from "react";
import "./MainSection.scss";

import LinkSection from "../link-section/LinkSection";
import MainNavigation from "../main-navigation/MainNavigation";
import PostSection from "../post-section/PostSection";
import Slider, { setPositionByIndex } from "../Slider/Slider";

export default function MainSection() {
	return (
		<div className="MainSection">
			<MainNavigation setPositionByIndex={setPositionByIndex} />
			<div className="MainSection__MainContainer ">
				<Slider name="MainContainer__slider">
					<LinkSection />
					<PostSection />
				</Slider>
			</div>
		</div>
	);
}
