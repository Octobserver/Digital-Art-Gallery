import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import DailyChallenge from './pages/DailyChallenge';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<MyWork />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/daily-challenge' element={<DailyChallenge />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
