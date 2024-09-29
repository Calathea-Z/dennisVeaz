import React from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";

const Youtube: React.FC = () => {
	const videoIds = ["SI63ENxPRMw", "5u_hwD2SWu8", "ajztNISrALg", "VookNvBdHg0"]; // Array of video IDs
	const opts = {
		height: "100%",
		width: "100%",
		playerVars: {
			autoplay: 0,
			rel: 0,
			controls: 1,
		},
	};

	return (
		<div
			className="h-screen bg-primary flex items-center justify-center p-4"
			id="youtube"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full h-full">
				{videoIds.map((videoId, index) => (
					<motion.div
						key={index}
						className="w-full h-full border-2 border-accent"
						whileHover={{ scale: 1.02 }}
					>
						<YouTube
							className="w-full h-full rounded-lg shadow-lg"
							videoId={videoId}
							opts={opts}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Youtube;
