import './App.css';
import NavMenu from './components/NavMenu/NavMenu.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import AudioPlayer from './components/AudioPlayer/AudioPlayer.js';
import Centerblock from './components/Centerblock/Centerblock.js';

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