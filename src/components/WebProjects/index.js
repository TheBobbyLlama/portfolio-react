import React from "react";
import "./style.css";

function WebProjects(props) {
	const projectInfo = [
		{
			id: "hopto",
			name: "Hop To",
			description: `Find breweries either in your hometown or while on vacation, and plan a trip to see them!`,
			details: `<p>Hop To is a group project from UW Coding Bootcamp.  My responsibilities for the project were the Bing Maps display and tour selection/routing.  I also created most of the custom icons for the project.<p>
			<p>This project was made with HTML/CSS/Javascript/JQuery, and uses the <a href="https://www.microsoft.com/en-us/maps/choose-your-bing-maps-api" target="_blank">Bing Maps API</a> <a href="https://www.openbrewerydb.org/" target="_blank">Open Brewery DB</a> and <a href="https://www.zipcodeapi.com/" target="_blank">Zip Code API</a>.</p>`,
			link: "https://laurenceokite.github.io/hop-to/",
			github: "https://github.com/laurenceokite/hop-to",
		},
		{
			id: "pagebound",
			name: "Pagebound",
			description: `An online book club where you can find clubs in your area or create your own, as well as participate in book discussions.`,
			details: `<p>Pagebound is a full stack group project from UW Coding Bootcamp.  Our group didn't have fixed roles, so I was involved at all levels of the stack.  However, I was primarily responsible for the database models, and I made the logo as well.<p>
			<p>This project was made with HTML/CSS/Javascript/JQuery on the frontend, and Node/Express/Sequelize/MySQL on the backend.  It also uses the <a href="https://developers.google.com/books" target="_blank">Google Books API</a> and <a href="https://www.zipcodeapi.com/" target="_blank">Zip Code API</a>.</p>`,
			link: "https://tranquil-shelf-96400.herokuapp.com/",
			github: "https://github.com/TheBobbyLlama/pagebound"
		},
		{
			id: "esorp",
			name: "ESO Rollplay",
			description: `A character tracking and dice roll system to facillitate roleplaying in the game The Elder Scrolls Online.`,
			details: `<p>This is the player portal page which consists of 3 subpages:</p>
			<ul>
				<li>A character sheet page where players can create and save their characters for use in the system.</li>
				<li>A 'Rollplay' page where players can participate in roleplaying sessions by making dice rolls.</li>
				<li>A profile page where characters can be browsed and viewed.</li>
			</ul>
			<p>ESO Roleplay was made with HTML/CSS/Javascript/JQuery, and uses <a href="https://firebase.google.com/" target="_blank">Google Firebase</a> to store data.</p>`,
			link: "https://thebobbyllama.github.io/eso-roleplay/",
			github: "https://github.com/TheBobbyLlama/eso-roleplay",
		},
	];

  return (
	<div className="showcase">
		{projectInfo.map((project) => (
			<div
				key={project.id}
				className={"showcase-" + project.id}
			>
				<a href={project.link} target="_blank" rel="noopener noreferrer">
					<h3>{project.name}</h3>
					<p>{project.description}</p>
				</a>
			</div>
		))}
	</div>
  );
}

export default WebProjects;