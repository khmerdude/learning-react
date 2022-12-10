import React from "react";
import './Home.css';

const Home = () => {
  return (
    
    <div className="landing-page">
    <div className="about-me">
      <h2 className="section-title">About Me</h2>
      <p>
        I have always been passionate about technology and how it can be used to solve problems and improve people's lives. This passion led me to pursue a career in software engineering, where I can use my skills and knowledge to create innovative and useful software solutions.
      </p>
      <p>
        I am particularly interested in web development and enjoy working with the latest technologies and frameworks, such as React and Node.js. I am always looking for ways to improve my skills and stay up-to-date with the latest developments in the field.
      </p>
      <p>
        In my free time, I enjoy learning about new technologies and attending conferences and meetups to connect with other like-minded individuals. I am also an avid gamer and enjoy spending time with my friends and family.
      </p>
    </div>
    <div className="contact-me">
      <h2 className="section-title">Contact Me</h2>
      <p>
        If you would like to get in touch with me, please feel free to contact me via email at <a href="mailto:your.email@domain.com">jett1004@gmail.com</a> or via my social media accounts listed below.
      </p>
      <ul>
        <li><a href="https://www.linkedin.com/in/your-username">LinkedIn</a></li>
        <li><a href="https://github.com/your-username">GitHub</a></li>
        <li><a href="https://twitter.com/your-username">Twitter</a></li>
      </ul>
    </div>
  </div>
  );
};

export default Home;
