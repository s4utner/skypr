import './App.css';
import './components/NavMenu.js'
import NavMenu from './components/NavMenu.js';
import Sidebar from './components/Sidebar.js';
import AudioPlayer from './components/AudioPlayer.js';
import Centerblock from './components/Centerblock';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          {NavMenu()}
          {Centerblock()}
          {Sidebar()}
        </main>
        {AudioPlayer()}
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App;