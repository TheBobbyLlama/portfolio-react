import React from 'react';
import './style.css';

function Navigation({ sections, curSection, changeSection }) {
  return (
    <nav>
		<div>
			<h3>Navigation</h3>
			<ul>
				{sections.map((section) => (
					<li
					key={section.id}
					className={(section.id === curSection) ? "curSection" : ""}
					>
						{ (section.id === curSection) ?
							<span>{section.display}</span>
						:
						<span
							onClick={(e) => {
								e.preventDefault();
								changeSection(section.id);
							}}
						>
						{section.display}
						</span>
						}
					</li>
				))}
			</ul>
		</div>
    </nav>
  );
}

export default Navigation;