import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";

/**
 * The Home function defines the content that makes up the main content of the Home page
 *
 * This component is attached to the /about path in router.jsx
 * The function in app.jsx defines the page wrapper that this appears in along with the footer
 */

export default function Home() {
  const [astronaut, flyAstronaut] = React.useState("box_astronaut_stat");

  // When the user clicks we trigger the astronaut animation
  const handleAstronaut = () => {
    let astroTimes = [5, 11, 24, 30];
    let astroTime = "box_astronaut_time_" + Math.floor(Math.random() * 4);
    let astroAnimation = "box_astronaut_anim_" + Math.floor(Math.random() * 4);

    flyAstronaut(astroTime + " " + astroAnimation);
    setTimeout(() => {
      flyAstronaut("box_astronaut_stat");
    }, astroTimes[astroTime.substr(-1)] * 2000);
  };
  return (
    <>
      <div className="page home">
        <h1 className="title">Hello, I am Mushahid</h1>
        <h2>Applications Engineer @ Oracle</h2>
        <p>
          Cybersecurity and IoT enthusiast, Gaming connoisseur
          <br />
          Check out my <Link href="/projects">projects</Link> or read more{" "}
          <Link href="/about">about me</Link>
        </p>
      </div>
      <div>
        <div>
          <div className={astronaut}>
            <img
              className="object_astronaut"
              src="/astronaut.svg"
              width="140px"
              onClick={handleAstronaut}
              alt="Atronaut illustration"
            />
          </div>
        </div>
        <div className="navigation">
          <div>
            <a className="btn--click-me" onClick={handleAstronaut}>
              ^ Psst, click me ^
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
