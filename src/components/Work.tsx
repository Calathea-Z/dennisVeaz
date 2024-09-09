import React from "react";
import YouTube from "react-youtube";

const Work: React.FC = () => {
	const videoId = "rO9eqdwmwxg"; // First video
	const nextVideoId = "dQw4w9WgXcQ"; // Next video

	const opts = {
		height: "95%",
		width: "100%",
		playerVars: {
			autoplay: 0,
			rel: 0,
			controls: 1,
		},
	};

	// Function to handle video end event
	const onEnd = (event: any) => {
		event.target.loadVideoById(nextVideoId); // Load the next video
	};

	return (
		<div
			className="h-screen bg-black flex items-center justify-center"
			id="work"
		>
			<div className="w-full h-full border-2 border-accent">
				<YouTube
					className="w-full h-full rounded-lg shadow-lg"
					videoId={videoId} // Start with the first video
					opts={opts}
					onEnd={onEnd} // Handle video end event
				/>
			</div>
		</div>
	);
};

export default Work;
