import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import WebProjects from "./components/WebProjects";
import OtherProjects from "./components/OtherProjects";
import "./App.css";

function App() {
  const [sections] = useState([
    { id: "about", display: "About Me" },
    { id: "web", display: "Web Projects" },
    { id: "other", display: "Other Projects" },
    { id: "contact", display: "Contact" }
  ]);

  const [curSection, setCurSection] = useState(sections[0]);

  function changeSection(id) {
    document.querySelector(".preheader").className = "preheader collapse";;
    setCurSection(sections.find(item => item.id === id));
  }

  return (
    <div className="App">
      <main>
        <div className="preheader"></div>
        <Header
          sections={sections}
          curSection={curSection.id}
          changeSection={changeSection}
        />
        <section id={curSection.id}>
          <h2>{curSection.display}</h2>
          {(curSection.id === "about") && <About />}
          {(curSection.id === "web") && <WebProjects />}
          {(curSection.id === "other") && <OtherProjects />}
        </section>
      </main>
    </div>
  );
}

export default App;
