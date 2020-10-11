import React from "react";
import headshot from "../../assets/images/bfeuerstein.jpg";
import "./style.css";

function About(props) {
  return (
	<>
		<img src={headshot} alt="Bob Feuerstein" />
		<p>
			A developer based in Eau Claire, Wisconsin.
		</p>
		<ul>
			<li>Software development background - C#.</li>
			<li>Willing to relocate or work remotely.</li>
			<li>Hobbies include gaming, tinkering with games, travel, and spending time with nieces!</li>
		</ul>
	</>
  );
}

export default About;