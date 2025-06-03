import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import PostDetails from './components/PostDetails'
import HomePage from './pages/HomePage'
import './App.css'
function App() {


  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetails/>} />
       </Routes>
      </div> 
    </Router>
  )
}

export default App
