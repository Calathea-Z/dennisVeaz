import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const TopBar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="fixed top-0 right-0 z-10 p-4">
			<button
				onClick={toggleMenu}
				className="text-white text-3xl focus:outline-none shadow-lg bg-danger p-2 rounded"
			>
				&#9776;
			</button>
			{isOpen && (
				<nav className="absolute top-6 right-0 mt-12 flex flex-col items-center justify-start space-y-4 pt-4 bg-danger bg-opacity-90 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out">
					<ScrollLink
						to="hero"
						smooth={true}
						duration={500}
						className="text-white text-xl font-bold hover:text-accent cursor-pointer"
						onClick={toggleMenu}
					>
						Home
					</ScrollLink>
					<ScrollLink
						to="about"
						smooth={true}
						duration={500}
						className="text-white text-xl font-bold hover:text-accent cursor-pointer"
						onClick={toggleMenu}
					>
						About
					</ScrollLink>
					<ScrollLink
						to="work"
						smooth={true}
						duration={500}
						className="text-white text-xl font-bold hover:text-accent cursor-pointer"
						onClick={toggleMenu}
					>
						Music
					</ScrollLink>
					<ScrollLink
						to="youtube"
						smooth={true}
						duration={500}
						className="text-white text-xl font-bold hover:text-accent cursor-pointer"
						onClick={toggleMenu}
					>
						Videos
					</ScrollLink>
					<ScrollLink
						to="contact"
						smooth={true}
						duration={500}
						className="text-white text-xl font-bold hover:text-accent cursor-pointer"
						onClick={toggleMenu}
					>
						Contact
					</ScrollLink>
				</nav>
			)}
		</div>
	);
};

export default TopBar;
