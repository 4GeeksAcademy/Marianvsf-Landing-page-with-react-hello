import React from "react";
//include images into your bundle
import MyNavbar from "./navbar";
import { Footer } from "./footer";
import Welcome from "./welcomeCard";
import MyCards from "./Cards";


//create your first component
const Home = () => {
	return (
	<div>
      <MyNavbar/>
	  <div className="container">
            <Welcome id='welcome'/>
					<div id="TheCards" className="d-flex justify-content-center flex-wrap">
						<MyCards 
						imag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s"
						title="Card Title"
						description="Lorem ipsum adipisicing elit. Rem laudantium, non vitae earum ipsam sint amet."
						/>
						<MyCards
						imag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s"
						title="Card Title2"
						description="Lorem2 ipsum adipisicing elit. Rem laudantium, non vitae earum ipsam sint amet."
						/>
						<MyCards
						imag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s"
						title="Card Title3"
						description="Lorem3 ipsum adipisicing elit. Rem laudantium, non vitae earum ipsam sint amet."
						/>
						<MyCards
						imag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s"
						title="Card Title4"
						description="Lorem4 ipsum adipisicing elit. Rem laudantium, non vitae earum ipsam sint amet."
						/>
					</div>
				</div>
	  <Footer/>
	</div>
	);
};

export default Home;
