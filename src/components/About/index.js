import React from "react";
import headshot from "../../assets/images/bfeuerstein.jpg";
import "./style.css";

function About(props) {
  return (
	<>
		<img src={headshot} alt="Bob Feuerstein" />
		<ul>
			<li>Software development background - C#.</li>
			<li>Proficient in several web technologies:
				<ul>
					<li>Frontend: HTML, CSS, Javascript, &amp; React</li>
					<li>Backend: Node.js, Express, Sequelize, MySQL, &amp; MongoDB</li>
				</ul>
			</li>
			<li>Willing to relocate or work remotely.</li>
			<li>Hobbies include gaming, tinkering with games, travel, and spending time with nieces!</li>
		</ul>
	</>
  );
}

export default About;