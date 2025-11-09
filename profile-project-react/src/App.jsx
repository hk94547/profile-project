import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [resume, setResume] = useState(null)

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
