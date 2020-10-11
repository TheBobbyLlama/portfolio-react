import React from "react";
import Navigation from "../Navigation";
import "./style.css";

function Header(props) {
  return (
	<header>
		<h1>Bob Feuerstein</h1>
		<Navigation
			sections={props.sections}
			curSection={props.curSection}
			changeSection={props.changeSection}
		/>
	</header>
  );
}

export default Header;