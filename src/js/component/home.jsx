import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotrom from "./jumbotrom.jsx";
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//create your first component
 export const Home = () => {
	const arr = [1, 2, 3, 4]
	return (
		<div className="">
			<Navbar />
			<div className="container-fluid">
				<Jumbotrom />
					</div>
			<div className="container d-flex gap-4 my-3 text-center">
				{
				arr.map((el) => <Card/>)
				}
				 </div>
				<div className="footer">
					<Footer />
					</div> 
	</div>
	);
};
export default Home;
