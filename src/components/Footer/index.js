import React from "react";
import mailIcon from "../../assets/images/mail.png";
import githubIcon from "../../assets/images/github.png";
import linkedInIcon from "../../assets/images/linkedin.png";
import nexusIcon from "../../assets/images/nexus.png";
import "./style.css";

function Footer(props) {
	const footerItems = [
		{
			label: "Email",
			icon: mailIcon,
			link: "mailto:thebobbyllama@yahoo.com"
		},
		{
			label: "Github",
			icon: githubIcon,
			link: "https://github.com/TheBobbyLlama/"
		},
		{
			label: "LinkedIn",
			icon: linkedInIcon,
			link: "https://www.linkedin.com/in/bob-feuerstein/"
		},
		{
			label: "Nexus Mods",
			icon: nexusIcon,
			link: "https://www.nexusmods.com/users/5944841?tab=user+files"
		}
	];

	return (
		<footer>
			<ul>
				{footerItems.map(contact =>
				<li
					key={contact.label}
				>
					<a href={contact.link} target="_blank" rel="noopener noreferrer">
						<img src={contact.icon} alt={contact.label} />
					</a>
				</li>)}
			</ul>
		</footer>
	);
}

export default Footer;