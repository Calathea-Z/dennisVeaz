import { Link as ScrollLink } from "react-scroll";

const Hero: React.FC = () => {
	return (
		<div
			id="hero"
			className="bg-cover bg-center h-screen flex flex-col items-start p-8 md:p-20"
			style={{ backgroundImage: "url('/stock_music_hero.jpg')" }}
		>
			<h1 className="text-white text-6xl md:text-8xl font-bold mb-4">
				DENBY VZY
			</h1>
			<p className="text-white text-xl md:text-2xl font-bold mb-8">
				MUSIC COMPOSER & PRODUCER / ONLINE GAMER / ALL AROUND GOOF_BALL
			</p>
			<ScrollLink to="about" smooth={true} duration={500}>
				<button className="bg-accent hover:bg-highlight text-black text-xl font-bold py-2 px-4 rounded">
					Learn More
				</button>
			</ScrollLink>
		</div>
	);
};

export default Hero;
