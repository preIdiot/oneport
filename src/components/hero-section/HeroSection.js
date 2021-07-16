import React from "react";
import "./HeroSection.scss";
import profileImage from "../../assets/manOnLedge.jpg";
import MainNavigation from "../main-navigation/MainNavigation";

/**
 *  This is the heroSection Frame in Figma, this component will contain the heroContent (the big image, the bold username and the description)

    Make sure to import mainNavigation component here because that also comes inside the heroSection Frame.
 * @returns 
 */

function HeroSection() {
	return (
		<div className="heroSection">
			<div className="heroContainer">
				<div className="heroContent">
					<div className="heroContent__img">
						<img src={profileImage} alt="" />
					</div>

					<div className="heroHeader">
						<p className="heroHeader__name">@lewisorlando</p>
						<p className="heroHeader__desc">
							Fulltime Backend Engineer at IBM and a passionate photographer
							based in LA.
						</p>
					</div>
				</div>

				<MainNavigation />
			</div>
		</div>
	);
}

export default HeroSection;
