import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import MyNavbar from "./navbar";
import { Footer } from "./footer";
import MyCards1 from "./Cards";
import Welcome from "./welcomeCard";



//create your first component
const Home = () => {
	return (
		<div>
      <MyNavbar/>
	  <div className="d-flex flex-column align-items-center">
	  <Welcome/>
      <MyCards1/>
		</div>
	  <Footer/>
		</div>
	);
};

export default Home;
