import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div
			className="flex flex-col items-center justify-between p-4 md:p-20 xl:flex-row xl:h-screen"
			id="about"
			ref={ref}
		>
			<div className="w-full p-4 text-left xl:w-2/3 flex flex-col justify-center">
				<blockquote className="text-base md:text-lg xl:text-lg mb-4 border-l-4 border-accent pl-4 italic leading-relaxed md:leading-loose">
					<motion.p
						className="text-xl md:text-3xl lg:text-4xl xl:text-3xl mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.5 }}
					>
						Dennis is an up-and-coming composer for video games and short films
						who specializes in creating immersive, emotionally rich soundscapes
						that elevate both gameplay and storytelling. His work is a seamless
						blend of intricate sound design and memorable melodies, crafted to
						enhance the player's experience and leave a lasting impact.
					</motion.p>
					<br />
					<motion.p
						className="text-xl md:text-3xl xl:text-3xl mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						From the age of 4, when he first sat down at his grandmother's
						organ, music has been his lifelong passion. This early start paved
						the way for years of exploration, from touring in bands to composing
						intricate soundscapes for multimedia. His musical influences span a
						diverse range—from the improvisational energy of jam bands to the
						complex harmonies of jazz and the timeless beauty of classical
						music.
					</motion.p>
					<motion.p
						className="text-lg md:text-2xl xl:text-3xl"
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						In the realm of video game music, Dennis draws inspiration from
						modern composers like Lena Raine and Wilbert Roget, II, while paying
						homage to the classics created by legends such as Koji Kondo and
						David Wise. With every project, his goal is to craft immersive and
						memorable soundtracks that resonate with players long after the game
						is over.
					</motion.p>
				</blockquote>
			</div>
			<div className="w-full p-4 md:p-10 lg:w-3/5 xl:w-2/5 flex justify-center items-center xl:h-full rounded-lg">
				<motion.img
					src="/profile_pic.jpg"
					alt="Profile"
					className="w-full h-auto rounded-lg shadow-lg max-h-screen p-10"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={
						inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
					}
					transition={{ duration: 0.5, delay: 0.6 }}
				/>
			</div>
		</div>
	);
};

export default About;
