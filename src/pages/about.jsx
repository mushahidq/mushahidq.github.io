import * as React from "react";

export default function About() {

  return (
    <div className="page">

      <h1 className="title">About Me</h1>
      <div className="page-content">
        <p>
          <b>
            Master of Science (Computer Science) student at University of Calgary with software engineering experience of over 3 years and a solid foundation in full-stack development, information security, and enterprise applications.
          </b>
        </p>
        <p>
          <u>My interests:</u>{" "}
          <em>
            Cybersecurity, Open Source Software, Deep Learning and Computer
            Graphics
          </em>
        </p>
        <p>
          I have been experimenting with computers ever since my family got our first computer and have broken my fair share of devices. I got my {" "}
          <b class="imp">
            Bachelor of Engineering in Computer Science and Engineering
          </b>{" "}
          from <b class="imp">The Maharaja Sayajirao University of Baroda</b>,
          where I honed my skills in programming, web technologies, and database
          management.
        </p>
        <p>
          I worked as an Applications Engineer at <b class="imp">Oracle</b> in Gandhinagar,
          where I specialized in the Logistics application spanning Inventory,
          Shipping and Receiving modules in Supply Chain Management within the
          Fusion Apps (SaaS) platform. My role involved product development, triaging customer issues, resolving bugs, and collaborating with cross-functional teams
          to ensure optimal product performance. My technical expertise in Java,
          ADF, and various web technologies allowed me to provide effective and
          scalable solutions for complex problems.
        </p>
        <p>
          I interned at <b class="imp">Forenzy Networks</b> during the final
          semester of my Bachelor's degree , focusing on cybersecurity research.
          There, I conducted web-application penetration testing, developed
          security tools, and implemented end-to-end security solutions, which
          sparked my passion for protecting digital assets. As a part of my
          Bachelor's thesis, I helped developed a honeypot for a cybersecurity
          NGO. I also helped them set up a 'Security Operations Centre (SOC)'
          for realtime Indicators of Compromise (IoCs) detection using
          open-source tools such as Wazuh, Coretex, MISP, and the Hive.
          Additionally, I also worked on Apache Struts RCE and log4j
          vulnerability scanners.
        </p>
        <p>
          Beyond my professional experience, I am deeply interested in the
          intersection of technology and security. I have led initiatives in
          coding clubs, organized tech workshops, and contributed to various
          community events. I am particularly fascinated by emerging
          technologies and am committed to continuous learning and innovation.
        </p>
        <p>
          My aspiration is to leverage my technical skills and passion for
          problem-solving to contribute to groundbreaking projects that make a
          positive impact in the tech industry.
        </p>
      </div>
    </div>
  );
}
