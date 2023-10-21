import './App.css';
import './components/NavMenu.js'
import navMenu from './components/NavMenu.js';
import sidebar from './components/Sidebar.js';
import tracklist from './components/Tracklist.js';
import audioPlayer from './components/AudioPlayer.js';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          {navMenu()}
          {tracklist()}
          {sidebar()}
        </main>
        {audioPlayer()}
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App;