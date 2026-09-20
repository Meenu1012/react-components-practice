import { useState } from "react";
import "./styles.css";

// 1. Header Component
function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// 2. Footer Component
function Footer({ name }) {
  return (
    <footer className="footer">
      <p>© 2026 {name}. All rights reserved.</p>
    </footer>
  );
}

// 3. Card Component
function Card({ title, description, technology }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <strong>Technologies: {technology}</strong>
    </div>
  );
}

// 4. Button Component
function Button({ text, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
}

// 5. Form Component
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(`Hello, ${name}! Your form was submitted successfully.`);
    setName("");
    setEmail("");
  }

  return (
    <section className="form-section" id="contact">
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </section>
  );
}

// Main App Component
function App() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Header title="React Components Practice" />

      <main>
        <section id="home">
          <h2>Welcome to My React Project</h2>
          <p>
            This project demonstrates reusable React components,
            props, and state.
          </p>
        </section>

        <section id="about">
          <h2>My Projects</h2>

          <Card
            title="Health Monitoring System"
            description="A web application for managing patient information and monitoring health-related data."
            technology="React, Node.js, Express.js, MongoDB"
          />

          <Card
            title="Personal Portfolio"
            description="A website displaying my skills, education, and projects."
            technology="HTML, CSS, JavaScript"
          />
        </section>

        <section className="counter-section">
          <h2>State Example</h2>

          <p>Button clicked: {count} times</p>

          <Button
            text="Click Me"
            onClick={handleButtonClick}
          />
        </section>

        <Form />
      </main>

      <Footer name="Meenakshi" />
    </div>
  );
}

export default App;
