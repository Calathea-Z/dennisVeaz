import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

const Hero: React.FC = () => {
	const [bgImage, setBgImage] = useState("/stock_music_hero.jpg");

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1025) {
				setBgImage("/Mostly-Square-Portrait.jpg");
			} else {
				setBgImage("/stock_music_hero.jpg");
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div
			id="hero"
			className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-4 md:p-20 md:items-start md:justify-start"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<h1 className="text-white text-4xl md:text-7xl font-bold mb-2 md:mb-4 text-center md:text-left">
				DENNIS VEAZEY
			</h1>
			<p className="text-white text-lg md:text-3xl font-bold mb-4 md:mb-8 text-center md:text-left">
				COMPOSER & MUSIC PRODUCER
			</p>
			<ScrollLink to="about" smooth={true} duration={500}>
				<button className="bg-accent hover:bg-danger text-black hover:text-white text-lg md:text-xl font-bold py-2 px-4 rounded">
					Learn More
				</button>
			</ScrollLink>
		</div>
	);
};

export default Hero;
