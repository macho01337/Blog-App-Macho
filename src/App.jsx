import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import MostCommentedPage from './pages/MostCommentedPage'
import PostDetailsPage from './pages/PostDetailsPage'
import PostDetails from './components/PostDetails'
import './App.css'

function App() {


  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/most-commented" element={<MostCommentedPage />} />
          <Route path="/posts/:id" element={<PostDetailsPage />} />
          <Route path="/post/:id" element={<PostDetails/>} />
       </Routes>
      </div> 
    </Router>
  )
}

export default App
