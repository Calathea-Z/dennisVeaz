import React, { useState } from "react";
import { SkipBack, SkipForward } from "@phosphor-icons/react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MusicPlayer.css";

const Work: React.FC = () => {
	const [currentTrack, setCurrentTrack] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const tracks = [
		{
			name: "Sequential",
			src: "/music/Sequential.mp3",
			duration: "2:52",
		},
		{
			name: "Crystal Refinery",
			src: "/music/Crystal_Refinery.mp3",
			duration: "3:04",
		},
		{
			name: "Seven Puddles",
			src: "/music/The Seven Puddles (Maiden Voyage of a Mouse).mp3",
			duration: "2:16",
		},
		{
			name: "Reflexes",
			src: "/music/Reflexes.mp3",
			duration: "2:14",
		},
		{
			name: "Theme from 'Hero to Villain'",
			src: "/music/Theme _From _Hero_ To_ Villain.mp3",
			duration: "3:18",
		},
		{
			name: "If a Mouse Gives you a Cookie",
			src: "/music/If_a_ Mouse_ Gives_ You_ a_ Cookie.mp3",
			duration: "2:16",
		},
		{
			name: "1000 dollar battlepass",
			src: "/music/1000_Dollar_ Battlepass.mp3",
			duration: "2:49",
		},
		{
			name: "Jungle Robot Baby Playtime Center",
			src: "/music/Jungle_ Robot_ Baby_ Playtime_ Center.mp3",
			duration: "2:28",
		},
		{
			name: "Robot Lullaby",
			src: "/music/Robot_Lullaby.mp3",
			duration: "3:45",
		},
	];

	const handleClickNext = () => {
		setCurrentTrack((currentTrack + 1) % tracks.length);
	};

	const handleClickPrevious = () => {
		setCurrentTrack((currentTrack - 1 + tracks.length) % tracks.length);
	};

	const handlePlay = () => {
		setIsPlaying(true);
		console.log("Playing");
	};

	const handlePause = () => {
		setIsPlaying(false);
		console.log("Paused");
	};
	return (
		<div
			className="h-screen bg-primary flex items-center justify-center overflow-hidden bg-cover bg-center bg-gradient-to-br from-black to-blue-900"
			id="work"
		>
			<div className="w-full p-12 max-w-3xl bg-black shadow-lg rounded-lg overflow-y-auto">
				<div className="mb-8 text-center">
					<h2 className="text-4xl font-bold text-white">
						{tracks[currentTrack].name}
					</h2>
				</div>
				<div className="flex items-center justify-center">
					<div
						className="soundwave-container mb-8"
						style={{ visibility: isPlaying ? "visible" : "hidden" }}
					>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
					{!isPlaying && (
						<div className="mb-8" style={{ height: "40px" }}></div>
					)}
				</div>
				<AudioPlayer
					autoPlay={false}
					src={tracks[currentTrack].src}
					onPlay={handlePlay}
					onPause={handlePause}
					onClickNext={handleClickNext}
					onClickPrevious={handleClickPrevious}
					showSkipControls={true}
					customAdditionalControls={[]}
					customIcons={{
						previous: <SkipBack size={24} color="white" />,
						next: <SkipForward size={24} color="white" />,
					}}
				/>
				<div className="mt-8">
					<ul className="text-white">
						{tracks.map((track, index) => (
							<li
								key={index}
								className={`p-2 cursor-pointer transition-transform transform ${
									index === currentTrack
										? "text-lg border-b-2 border-stone-500 scale-102 text-secondary"
										: ""
								} flex justify-between`}
								onClick={() => setCurrentTrack(index)}
							>
								<span>{track.name}</span>
								<span>{track.duration}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Work;
