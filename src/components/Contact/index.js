import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./style.css";

function Contact(props) {
	const [contactData, setContactData] = useState({ contactName: "", contactEmail: "", contactMessage: ""});

	function handleChange(e) {
		var validEntry = false;
		var errorDiv = document.querySelector("#contactForm div[data-key='" + e.target.id + "'");
		var submitButton = document.querySelector("#contactSubmit");

		if (e.target.id === "contactEmail") {
			validEntry = validateEmail(e.target.value);
		} else {
			validEntry = !!e.target.value;
		}

		if (validEntry) {
			errorDiv.className = "error";
		} else {
			errorDiv.className = "error show";
		}

		if (validEntry) {
			contactData[e.target.id] = e.target.value;
		} else {
			contactData[e.target.id] = "";
		}

		setContactData(contactData);

		if ((!validEntry) || (!contactData.contactName) || (!contactData.contactMessage) || (!validateEmail(contactData.contactEmail))) {
			submitButton.setAttribute("disabled", "");
		} else {
			submitButton.removeAttribute("disabled");
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		// TODO - Do something with the form data!
		console.log(contactData);
	}

	return (
		<form id="contactForm" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="contactName">Your Name:</label>
				<input type="text" id="contactName" onBlur={handleChange}></input>
			</div>
			<div className="error" data-key="contactName">
				<div>
					You must enter a name.
				</div>
			</div>
			<div>
				<label htmlFor="contactEmail">Your Email:</label>
				<input type="email" id="contactEmail" onBlur={handleChange}></input>
			</div>
			<div className="error" data-key="contactEmail">
				<div>
					You must enter a valid email address.
				</div>
			</div>
			<div>
				<textarea id="contactMessage" rows="5" placeholder="Enter your message here" onBlur={handleChange}></textarea>
			</div>
			<div className="error" data-key="contactMessage">
				<div>
					You must enter a message body.
				</div>
			</div>
			<div>
				<button type="submit" id="contactSubmit" disabled>Submit</button>
			</div>
		</form>
	);
}

export default Contact;