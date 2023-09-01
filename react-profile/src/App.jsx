import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bio, setBio] = useState("Hello all who visit this page my name is Francisco. I am first and foremost a proud husband to an amazing women and a proud father to two boys that are my whole world. I'm a dedicated and enthusiastic learner on a journey to becoming a skilled software developer. My passion for coding and problem-solving ignited my curiosity and led me to dive headfirst into the world of software development. As I navigate through various coding languages and frameworks, I'm fueled by the excitement of acquiring new skills and applying them to real-world projects. With a creative mindset and an eagerness to learn, I'm committed to honing my expertise in both front-end and back-end development. Every challenge I encounter is an opportunity for growth, and every line of code I write is a step towards achieving my goal of becoming a proficient developer.  ");
  
  return (
    <div className="profile-container">
      <header className="header1">Francisco Jimenez</header>
      <div className="profile-picture">
        <img 
        src="../public/Profile pic2.jpg"
        alt="profile picture"
        height="300"
        width="200"
        
        />
      </div>
      <div className="bio">
        <p>{bio}</p>
        <button onClick={() => setBio("insert fun facts")}>
          Click here for fun facts about me!
        </button>
      
      {/* Add more sections like work experience, education, skills, etc. */}
      <div className="work-section">
        <h2>Below are examples of apps I have created</h2>
        <div className="work-examples">
          <img 
            src="../public/Best Place project.png"
            alt="Example Work 1"
            className="work-example"
           width="500"
          />
          <img 
            src="../public/Ultimate PokeDex project.png"
            alt="Example Work 2"
            className="work-example"
            width="500"
          />
          {/* Add more examples of your work */}
        </div>
      </div>
    </div>
    <div className="social-links">
    <a href="https://github.com/Coyotefrank" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/frank-jimenez-691568141/" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  <a href="mailto:your-Franklopez35789@gmail.com">Email</a>
  </div>
 
</div>
  );
}
