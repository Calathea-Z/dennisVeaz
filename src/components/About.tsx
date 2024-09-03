import React from "react";

const About: React.FC = () => {
	return (
		<div
			className="flex flex-col md:flex-row items-center md:items-start p-8 md:p-20"
			id="about"
		>
			<div className="md:w-2/3 w-full p-4 text-left ">
				<h2 className="text-4xl md:text-7xl font-bold mb-6">About Me</h2>
				<blockquote className="text-lg mb-4 border-l-4 border-accent pl-4 italic leading-loose">
					<p className="text-4xl mb-4">
						"Yo, I'm a music producer who totally rocks at making some wild and
						wacky soundscapes. I've been in the biz for like, over a decade,
						crafting everything from epic film scores to video game jams. But
						don't get it twisted—I still find time to absolutely wreck some
						noobs in Overwatch, especially when I'm rolling as D.Va. Could've
						hit diamond rank, but you know, I like to keep it casual and just
						have fun. Used to be all about Umphrey's McGee, but now I'm vibing
						with some serious DEADMAU5 energy. I could shred on guitar, but
						honestly, I just let my computer do the heavy lifting these days.
						And when it comes to laying down tracks, I can go from yoga hot abb
						rock to ABBA, Hall and Oates to concert hall and concertos. Looking
						forward to blasting some ear holes later!"
					</p>
					<p className="text-3xl">
						"When I'm not laying down sick beats, I'm deep into the gaming
						world. I love finding new games, pwning fellow gamers, and just
						vibing with the community. For me, music and gaming are like peanut
						butter and jelly—they just go together. My mission? To crank up the
						audio experience in games and take the whole vibe to the next
						level!"
					</p>
				</blockquote>
			</div>
			<div className="md:w-1/3 w-full p-4">
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
