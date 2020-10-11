import React from "react";
import resumeFile from "../../assets/files/Resume - Bob Feuerstein.pdf";
import "./style.css";

function Resume(props) {
  return (
	<div>
		<ul id="proficiencies">
			<li><strong>Software development background</strong><span>C/C++/C#</span></li>
			<li><strong>Frontend web technologies</strong><span>HTML, CSS, &amp; Javascript; JQuery; React</span></li>
			<li><strong>Backend web technologies</strong><span>Node.js; Express; MongoDB; MySQL &amp; Sequelize</span></li>
		</ul>
		<h3>Resume</h3>
		<p>NOTE: This file is currently very outdated! I will get a better version here eventually.</p>
		<a id="resumeLink" href={resumeFile} target="_blank" rel="noopener noreferrer">View/Download</a>
	</div>
  );
}

export default Resume;