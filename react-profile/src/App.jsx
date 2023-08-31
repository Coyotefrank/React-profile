import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bio, setBio] = useState("Software Developer");
  
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
        <button onClick={() => setBio("Father, Husband, and future developer")}>
          Update Bio
        </button>
      
      {/* Add more sections like work experience, education, skills, etc. */}
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
