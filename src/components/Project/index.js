import React, { useState } from "react";
import "./style.css";
import ProjectDetails from "../ProjectDetails";

function Project({project}) {
	const [ modalShown, setModalShown] = useState(false);

	function toggleModal() {
		setModalShown(!modalShown);
	}

	return (
		<>
			<div
				className={"project-card showcase-" + project.id}
			>
				<span title="Click for more information." onClick={toggleModal}>
					<h3>{project.name}</h3>
					<p>{project.description}</p>
				</span>
			</div>
			{modalShown && <ProjectDetails project={project} toggleModal={toggleModal} />}
		</>
	);
}

export default Project;