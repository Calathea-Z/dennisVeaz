import React from "react";
import YouTube from "react-youtube";

const Work: React.FC = () => {
	const videoId = "rO9eqdwmwxg"; // Extracted from your YouTube link

	const opts = {
		height: "100%",
		width: "100%",
		playerVars: {
			autoplay: 1, // Auto-play the video
		},
	};

	return (
		<div
			className="h-screen bg-danger flex items-center justify-center"
			id="work"
		>
			<div className="w-full h-full border-2 border-accent">
				<YouTube
					className="w-full h-full rounded-lg shadow-lg"
					videoId={videoId}
					opts={opts}
				/>
			</div>
		</div>
	);
};

export default Work;
