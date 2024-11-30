import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import Navbar from './components/Navbar';
import CreateBlog from './components/CreateBlog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    //Add routes here 
    //Add Navbar to the top of the page
    <Router>    
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/about" element={<BlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
