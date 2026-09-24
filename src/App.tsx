function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h1>SyncStream</h1>

        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-content">
          <p className="badge">WATCH TOGETHER</p>

          <h2>
            Watch Together.
            <br />
            Stay Synchronized.
          </h2>

          <p className="description">
            Watch YouTube videos with your friends in real time.
            Create a room, share the code, and enjoy the experience together.
          </p>

          <div className="buttons">
            <button className="primary-btn">Create Room</button>
            <button className="secondary-btn">Join Room</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;