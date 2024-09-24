import React, { useState } from "react";
import {
	CaretRight,
	MusicNote,
	SkipBack,
	SkipForward,
} from "@phosphor-icons/react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MusicPlayer.css";

const MusicPlayer: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [currentTrack, setCurrentTrack] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const tracks = [
		{
			name: "Sequential",
			src: "/music/Sequential.mp3",
		},
		{
			name: "Crystal Refinery",
			src: "/music/Crystal_Refinery.mp3",
		},
		{
			name: "Reflexes",
			src: "/music/Reflexes.mp3",
		},
		{
			name: "Theme from 'Hero to Villain'",
			src: "/music/Theme_From_Hero_To_Villain.mp3",
		},
		{
			name: "If a Mouse Gives you a Cookie",
			src: "/music/If_a_Mouse_Gives_You_a_Cookie.mp3",
		},
		{
			name: "1000 dollar battlepass",
			src: "/music/1000_Dollar_Battlepass.mp3",
		},
		{
			name: "Jungle Robot Baby Playtime Center",
			src: "/music/Jungle_Robot_Baby_Playtime_Center.mp3",
		},
		{
			name: "Robot Lullaby",
			src: "/music/Robot_Lullaby.mp3",
		},
	];

	const togglePlayer = () => {
		setIsOpen(!isOpen);
	};

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
			className={`${
				isOpen ? "open" : "closed"
			} fixed bottom-2 right-2 bg-danger shadow-lg rounded-lg flex items-center justify-center`}
			style={{
				width: isOpen ? "600px" : "80px",
				height: isOpen ? "auto" : "80px",
			}}
		>
			<div
				className="toggle-button rounded-sm bg-accent p-1 cursor-pointer flex items-center justify-center shadow-md"
				onClick={togglePlayer}
			>
				{isOpen ? (
					<CaretRight size={24} color="black" />
				) : isPlaying ? (
					<div className="soundwave-container">
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
				) : (
					<MusicNote size={24} color="black" />
				)}
			</div>
			<div className={`music-card flex items-center ${isOpen ? "" : "hidden"}`}>
				<div className="track-info mr-4">
					<p className="text-lg font-semibold">{tracks[currentTrack].name}</p>
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
						previous: <SkipBack size={24} color="#F6DCAC" />,
						next: <SkipForward size={24} color="#F6DCAC" />,
					}}
				/>
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
				style={{ display: isOpen ? "none" : "none" }}
			/>
		</div>
	);
};

export default MusicPlayer;
