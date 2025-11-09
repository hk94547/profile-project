import { useState, useEffect } from 'react'
import './App.css'
import profilePic from './assets/profile-project.jpg' 

function App() {
  const [resume, setResume] = useState(null)
  const [showAbout, setShowAbout] = useState(false)

  const toggleAbout = () => {
    setShowAbout(!showAbout)
  }

  useEffect(() => {
    // Fetch resume data or set it to a default value
    setResume({
      name: "Hemanth",
      title: "Devops Engineer",
      experience: "8 years",
      skills: ["Golang", "Docker", "Kubernetes", "Kafka"]
    });
  }, []);

  console.log('Public URL:', import.meta.env.BASE_URL);
  
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = `${import.meta.env.BASE_URL}resume.pdf` // base url of react built app
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className='app-container'>
        <h1>Welcome to Hemanth's Profile</h1>
        
        <img 
          src={profilePic} 
          alt="Hemanth" 
          className="profile-picture" 
          onClick={toggleAbout}
          style={{cursor: 'pointer'}}
          />
        {showAbout && (
          <div className="about-overlay" onClick={() => setShowAbout(false)}>
          <div className="about-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowAbout(false)}>×</button>
            <h1>👨‍💻 About Me</h1>
            <p>Hey there! I'm a DevOps enthusiast who loves automating everything.</p>
            <p>When I'm not containerizing applications or managing Kubernetes clusters,
               you'll find me coding in Go or Python or Javascript.</p>
            <p>I believe in infrastructure as code and chai/candies as fuel! ☕</p>

            <div className="contact-links">
        <p>
          <span className="icon">📧GMAIL: </span>
          <a href="mailto:hk94547@gmail.com">hk94547@gmail.com</a>
        </p>
        <p>
          <span className="icon">💼Linkedin: </span>
          <a href="https://www.linkedin.com/in/hemanth-kumar-kondeti/" target="_blank" rel="noopener noreferrer">
            Hemanth Kumar
          </a>
        </p>
      </div>
          </div>
          </div>
        )}

        {resume && (
        <div className="section">
          <h2>📄 Resume</h2>
          <p>Name: {resume.name}</p>
          <p>Title: {resume.title}</p>
          <p>Experience: {resume.experience}</p>
          <p>Skills: {resume.skills.join(', ')}</p>
          <button onClick={downloadResume}>Download Resume</button>
        </div>
      )}
      </div>

    </>
  )
}

export default App
