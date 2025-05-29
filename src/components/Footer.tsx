import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
	return (
		<footer className="bg-stone-900 p-4 flex justify-between items-center">
			<ScrollLink to="hero" smooth={true} duration={500}>
				<button className="bg-white hover:bg-accent text-black text-sm font-bold py-1 px-2 rounded transform transition-transform duration-200 hover:scale-105">
					Back to Top
				</button>
			</ScrollLink>
			<a
				href="https://www.calathea.design"
				target="_blank"
				rel="noopener noreferrer"
				className="text-sm hover:bg-accent p-2 rounded-md hover:text-black"
			>
				Website by Calathea Web Design
			</a>
		</footer>
	);
};

export default Footer;
