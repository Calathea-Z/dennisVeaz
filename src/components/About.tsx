import React from "react";

const About: React.FC = () => {
	return (
		<div
			className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-20"
			id="about"
		>
			<div className="md:w-2/3 w-full p-4 text-left">
				<h2 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6">
					About Me
				</h2>
				<blockquote className="text-base md:text-lg mb-4 border-l-4 border-accent pl-4 italic leading-relaxed md:leading-loose">
					<p className="text-xl md:text-4xl mb-4">
						From the age of 4, when Dennis first sat down at his grandmother's
						organ, music has been his lifelong passion. This early start paved
						the way for years of exploration, from touring in bands to composing
						intricate soundscapes for video games. His musical influences span a
						diverse range—from the improvisational energy of jam bands to the
						complex harmonies of jazz and the timeless beauty of classical
						music.
					</p>
					<p className="text-lg md:text-3xl">
						In the realm of video game music, he draws inspiration from modern
						composers like Lena Raine and Wilbert Roget, II, while paying homage
						to the classics created by legends such as Koji Kondo and David
						Wise. With every project, his goal is to craft immersive and
						memorable soundtracks that resonate with players long after the game
						is over.
					</p>
				</blockquote>
			</div>
			<div className="md:w-1/3 w-full p-4 md:p-10">
				<img
					src="/profile_pic.jpg"
					alt="Profile"
					className="w-full h-auto rounded-lg shadow-lg"
				/>
			</div>
		</div>
	);
};

export default About;
