import Card from './Card.jsx'
import PortfolioCards from './Portfoliocards.jsx'


function App() {
  return (
    <>
      <h1>Joel</h1>
      <Card />
      <PortfolioCards />
      <p>Mechatronics Engineering Student | Embedded Software & Systems</p>

      <p>Building at the intersection of physical hardware and code. Focused on firmware, microcontrollers, and automation tools.</p>

      <hr />

      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Self-Balancing Two-Wheeled Robot</strong><br />
          Designed a custom PID control loop and integrated MPU6050 IMU for real-time stabilization.
        </li>
        <li>
          <strong>Arithmetic Utility (Go)</strong> - <a href="#">GitHub</a><br />
          A terminal-optimized mathematical tool built in Go.
        </li>
      </ul>

      <hr />

      <h2>Skills & Environment</h2>
      <p><strong>Languages:</strong> Go, Python, C</p>
      <p><strong>Environment:</strong> Arch Linux, Neovim, Git/CLI</p>

      <hr />

      <h2>Connect</h2>
      <p>
        <a href="https://github.com/yourusername">GitHub</a> |{' '}
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a> |{' '}
        <a href="mailto:your_email@example.com">Email</a>
      </p>
    </>
  )
}

export default App
