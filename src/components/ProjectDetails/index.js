import React from "react";
import "./style.css";

function ProjectDetails({project, toggleModal}) {
	function launchGithub() {
		window.open(project.github);
	}

	return (
		<div id="modalBG">
			<div id="previewModal">
				<h2>{project.name}</h2>
				<p><em>{project.description}</em></p>
				<p dangerouslySetInnerHTML={{ __html: project.details}} />
				<div className="linkholder">
					<a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
				</div>
				<iframe title={project.name} src={project.link}></iframe>
				<div>
					<button type="button" id="modalGithubButton" onClick={launchGithub}>Github</button>
					<button type="button" id="modalCloseButton" onClick={toggleModal}>Close</button>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;