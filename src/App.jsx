
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import CreatePost from './component/CreatePost';
import PostDetails from './component/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
