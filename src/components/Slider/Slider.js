import React, { useEffect } from "react";

// Global variables

let slider, slides, borderBottom;

let isDragging = false,
	startPos = 0,
	currentIndex = 0,
	currentTranslate = 0,
	prevTranslate = 0,
	animationID = 0;

/**
 * @param {object} props
 * @param {String} props.className ClassName for the Slider
 * @param {Array} props.children Child comoponents of Slider
 * @returns
 */
export default function Slider(props) {
	const className = props?.name ?? "slider";

	useEffect(() => {
		slider = document.querySelector(`.${className}`);
		slides = Array.from(document.querySelectorAll(".MainContainer__slides"));
		borderBottom = document.querySelector(".borderBottom__activeLine");
		createEventListeners();

		return decomposeEventListeners;
	}, [className]);

	return <div className={className}>{props.children}</div>;
}

/*	Contorl Functions */

/**
 * @readonly
 * 	@description Creates touch Event listeners
 */
const createEventListeners = () => {
	slides.forEach((slide, index) => {
		slide.addEventListener("touchstart", touchStart(index));
		slide.addEventListener("touchend", touchEnd);
		slide.addEventListener("touchmove", touchMove);
	});
};

/**
 * @readonly
 * 	@description Removes touch Event listeners
 */
const decomposeEventListeners = () => {
	slides.forEach((slide) => {
		slide.removeEventListener("touchstart", touchStart);
		slide.removeEventListener("touchend", touchEnd);
		slide.removeEventListener("touchmove", touchMove);
	});
};

/**
 * @readonly
 * @description Creates animation-frame on touch action
 * @param {Number} index
 */
const touchStart = (index) => (event) => {
	currentIndex = index;
	startPos = getPositionX(event);
	isDragging = true;
	animationID = requestAnimationFrame(animation);
};

/**
 * @readonly
 * @description Removes animation-frame on touch remove action
 * 	and sets index on the basis of position
 */
const touchEnd = () => {
	isDragging = false;
	cancelAnimationFrame(animationID);

	const movedBy = currentTranslate - prevTranslate;
	if (movedBy < -slider.offsetWidth / 2 && currentIndex < slides.length - 1)
		currentIndex++;
	else if (movedBy > slider.offsetWidth / 2 && currentIndex > 0) currentIndex--;

	setPositionByIndex();
};

/**
 * @readonly
 * @param {object} event
 * @description Updates currentTranslate if isDragging
 * 	( true on touch event active) is true
 */
const touchMove = (event) => {
	if (isDragging) {
		const currentPosition = getPositionX(event);
		currentTranslate = prevTranslate + currentPosition - startPos;
	}
};

/**
 * @readonly
 * @description Calls setSliderPosition and keep the
 * 	animation running if touch event is active
 */
const animation = () => {
	setSliderPosition();
	isDragging && requestAnimationFrame(animation);
};

/**
 * @readonly
 * @param {object} event
 * @returns {Number} current x coordinate of the touch
 */
const getPositionX = (event) => event.touches[0].clientX;
// event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;

/**
 * @public
 * @param {Number} index index of the slide to be shown
 * @description updates slides and border position
 * 	on the basis of index
 */
const setPositionByIndex = (index = currentIndex) => {
	currentTranslate = index * -slider.offsetWidth;
	prevTranslate = currentTranslate;

	document.querySelectorAll(".navSection__item").forEach((item, itemIndex) => {
		const active = item.classList.contains("navSection__active");
		if (index === itemIndex && !active)
			item.classList.add("navSection__active");
		else if (index !== itemIndex && active)
			item.classList.remove("navSection__active");
	});

	setSliderPosition();
};

/**
 * @readonly
 * @description update slides position in the dom
 */
const setSliderPosition = () => {
	slider.style.transform = `translateX(${currentTranslate}px)`;

	let borderPos =
		borderBottom.offsetWidth * (-currentTranslate / slider.offsetWidth);

	if (borderPos < 0) borderPos = 0;
	else if (borderPos > borderBottom.offsetWidth)
		borderPos = borderBottom.offsetWidth;

	borderBottom.style.transform = `translateX(${borderPos}px)`;
};

export { setPositionByIndex };
