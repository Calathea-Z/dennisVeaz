import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const TopBar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="w-full bg-secondary p-4 fixed top-0 z-10 md:hidden">
			<div className="flex justify-between items-center">
				<h1 className="text-accent text-3xl font-bold">Logo</h1>
				<button
					onClick={toggleMenu}
					className="text-accent text-3xl focus:outline-none"
				>
					&#9776;
				</button>
			</div>
			{isOpen && (
				<nav className="flex flex-col items-center justify-start space-y-4 pt-4">
					<ScrollLink
						to="hero"
						smooth={true}
						duration={500}
						className="text-white text-3xl font-bold hover:text-accent cursor-pointer"
						onClick={toggleMenu}
					>
						Home
					</ScrollLink>
					<ScrollLink
						to="about"
						smooth={true}
						duration={500}
						className="text-white text-3xl font-bold hover:text-accent cursor-pointer"
						onClick={toggleMenu}
					>
						About
					</ScrollLink>
					<ScrollLink
						to="work"
						smooth={true}
						duration={500}
						className="text-white text-3xl font-bold hover:text-accent cursor-pointer"
						onClick={toggleMenu}
					>
						Work
					</ScrollLink>
					<ScrollLink
						to="contact"
						smooth={true}
						duration={500}
						className="text-white text-3xl font-bold hover:text-accent cursor-pointer"
						onClick={toggleMenu}
					>
						Contact
					</ScrollLink>
				</nav>
			)}
		</header>
	);
};

export default TopBar;
