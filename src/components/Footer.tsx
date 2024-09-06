import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
	return (
		<footer className="bg-primary text-white p-4 flex justify-between items-center">
			<ScrollLink to="hero" smooth={true} duration={500}>
				<button className="bg-accent hover:bg-highlight text-black text-sm font-bold py-1 px-2 rounded">
					Back to Top
				</button>
			</ScrollLink>
			<a
				href="https://www.zach-sykes.com"
				target="_blank"
				rel="noopener noreferrer"
				className="text-sm hover:bg-highlight"
			>
				Website by Calathea Designs
			</a>
		</footer>
	);
};

export default Footer;
