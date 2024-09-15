import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MyNavbar from "./navbar";
import { Footer } from "./Footer4Geeks";



//create your first component
const Home = () => {
	return (
		<div> 
      <MyNavbar/>
      <Footer/>
		</div>
	);
};

export default Home;
