import {
	Guitar,
	WaveSawtooth,
	WaveSine,
	WaveTriangle,
} from "@phosphor-icons/react";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
	const iconSize = 24; // Reduced the icon size from 32 to 24
	const location = useLocation();
	const [currentSection, setCurrentSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["hero", "about", "work", "contact"];
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setCurrentSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location]);

	return (
		<nav className="bg-secondary h-full w-full md:w-[10%] fixed">
			<div className="flex flex-col items-center justify-start h-full space-y-4 pt-8">
				<ScrollLink
					to="hero"
					smooth={true}
					duration={500}
					className={`text-lg font-bold flex items-center whitespace-nowrap cursor-pointer ${
						currentSection === "hero"
							? "text-accent"
							: "text-white hover:text-accent"
					}`}
				>
					<Guitar size={iconSize} className="mr-2 hidden lg:inline" />
					<span>Home</span>
				</ScrollLink>
				<ScrollLink
					to="about"
					smooth={true}
					duration={500}
					className={`text-lg font-bold flex items-center whitespace-nowrap cursor-pointer ${
						currentSection === "about"
							? "text-accent"
							: "text-white hover:text-accent"
					}`}
				>
					<WaveSine size={iconSize} className="mr-2 hidden lg:inline" />
					<span>About</span>
				</ScrollLink>
				<ScrollLink
					to="work"
					smooth={true}
					duration={500}
					className={`text-lg font-bold flex items-center whitespace-nowrap cursor-pointer ${
						currentSection === "work"
							? "text-accent"
							: "text-white hover:text-accent"
					}`}
				>
					<WaveSawtooth size={iconSize} className="mr-2 hidden lg:inline" />
					<span>Work</span>
				</ScrollLink>
				<ScrollLink
					to="contact"
					smooth={true}
					duration={500}
					className={`text-lg font-bold flex items-center whitespace-nowrap cursor-pointer ${
						currentSection === "contact"
							? "text-accent"
							: "text-white hover:text-accent"
					}`}
				>
					<WaveTriangle size={iconSize} className="mr-2 hidden lg:inline" />
					<span>Contact</span>
				</ScrollLink>
			</div>
		</nav>
	);
};

export default Sidebar;
