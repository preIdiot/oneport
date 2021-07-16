import React from 'react'
import './App.scss';
import Layout from "./components/app-layout/Layout"

// Component imports goes below this comment


function App() {
  return (
    <Layout className="app">
      <h1>One port</h1>
    </Layout>
  );
}

export default App;



//import 'boxicons' - import the component whenever or wherever the icons are used

// The library has been installed as a dev dependency for easy access. Use the <i class="bx bxl-example"></i> font format instead of <box-icon></box-icon> element for easy updates in data.js and styling
