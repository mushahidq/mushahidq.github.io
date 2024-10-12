import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <Seo />
      {/* Header links to Home and About, Link elements matched in router.jsx */}
      <header className="header">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/about">About</Link>
          <span className="divider">|</span>
          <Link href="/projects">Projects</Link>
          <span className="divider">|</span>
          <Link href="/contact">Contact</Link>
        </div>
      </header>
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      <footer className="footer">
        <div className="social-icons">
          <a
            className="social-icons"
            href="https://github.com/mushahidq"
            aria-label="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              color="#FFFFFF"
              viewBox="0 0 512 512"
              className="icon cursor-pointer text-2xl mr-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
            </svg>
          </a>
          <a
            className="social-icons"
            href="https://linkedin.com/in/mushahidq"
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="icon cursor-pointer text-2xl mr-6"
              color="#0077B5"
              style={{ color: "#0077B5" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>
          <a
            className="social-icons"
            href="mailto:mushahidq@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="icon cursor-pointer text-2xl mr-6"
              color="#D44638"
              style={{ color: "#D44638" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
            </svg>
          </a>
        </div>
        <div className="copyright">©2024 Mohammed Mushahid Qureshi</div>
      </footer>
    </Router>
  );
}
