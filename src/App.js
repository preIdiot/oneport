import React from "react";
import "./App.scss";
import Layout from "./components/app-layout/Layout";
import HeroSection from "./components/hero-section/HeroSection";
import LinkSection from "./components/link-section/LinkSection";

// Component imports goes below this comment

function App() {
	return (
		<Layout className="app">
			<HeroSection />
			<LinkSection />
		</Layout>
	);
}

export default App;

//import 'boxicons' - import the component whenever or wherever the icons are used

// The library has been installed as a dev dependency for easy access. Use the <i class="bx bxl-example"></i> font format instead of <box-icon></box-icon> element for easy updates in data.js and styling
