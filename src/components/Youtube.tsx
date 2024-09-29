import React from "react";
import YouTube from "react-youtube";

const Youtube: React.FC = () => {
	const videoIds = ["VookNvBdHg0", "SI63ENxPRMw", "5u_hwD2SWu8", "ajztNISrALg"]; // Array of video IDs

	const opts = {
		height: "95%",
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
					<div
						key={index}
						className={`w-full h-full md:h-full border-2 border-accent ${
							index >= 1 ? "hidden" : ""
						} sm:block md:hidden`}
					>
						<YouTube
							className="w-full h-full rounded-lg shadow-lg"
							videoId={videoId}
							opts={opts}
						/>
					</div>
				))}
				{videoIds.slice(0, 2).map((videoId, index) => (
					<div
						key={index}
						className={`w-full h-full border-2 border-accent ${
							index >= 2 ? "hidden" : ""
						} hidden md:block xl:hidden`}
					>
						<YouTube
							className="w-full h-full rounded-lg shadow-lg"
							videoId={videoId}
							opts={opts}
						/>
					</div>
				))}
				{videoIds.map((videoId, index) => (
					<div
						key={index}
						className={`w-full h-full md:h-full border-2 border-accent ${
							index >= 4 ? "hidden" : ""
						} hidden xl:block`}
					>
						<YouTube
							className="w-full h-full rounded-lg shadow-lg"
							videoId={videoId}
							opts={opts}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Youtube;
