import React from "react";

import "./style.css";

function OtherProjects(props) {
	const modInfo = [
		{
			id: "dwemermatron",
			name: "Dwemermatron",
			description: "Customize your own robotic follower, similar to Fallout 4's Automatron DLC.",
			links: [
				{
					game: "Special Edition",
					url: "https://www.nexusmods.com/skyrimspecialedition/mods/24636"
				},
				{
					game: "Classic",
					url: "https://www.nexusmods.com/skyrim/mods/97004"
				}
			]
		},
		{
			id: "reincarnation",
			name: "Death Alternative - Reincarnation",
			description: "Instead of dying, take over the body of a random person in the game world.",
			links: [
				{
					game: "Special Edition",
					url: "https://www.nexusmods.com/skyrimspecialedition/mods/23784"
				},
			]
		},
		{
			id: "rmao",
			name: "RaceMenu - Animated Overlays",
			description: "Choose skin overlays to fade in while in combat, for effects like glowing rune tattoos.",
			links: [
				{
					game: "Special Edition",
					url: "https://www.nexusmods.com/skyrimspecialedition/mods/37275"
				},
				{
					game: "Classic",
					url: "https://www.nexusmods.com/skyrim/mods/103401"
				}
			]
		}
	];

	return (
		<div className="inset">
			<h3>Skyrim Modding</h3>
			<div className="stackedcontent">
				{modInfo.map((mod) => (
					<div key={mod.id} className={mod.id}>
						<h4>{mod.name}</h4>
						<p>{mod.description}</p>
						<ul>
							{mod.links.map(linkInfo => (
								<li key={linkInfo.game}>
									<a href={linkInfo.url} target="_blank" rel="noopener noreferrer">{linkInfo.game}</a>
								</li>
							))}
						</ul>
					</div>
				))}
				<div>
					<ul>
						<li>
							<a href="https://www.nexusmods.com/users/5944841?tab=user+files" target="_blank" rel="noopener noreferrer">View them all at nexusmods.com</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default OtherProjects;