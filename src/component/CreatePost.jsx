import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/posts', { title, content });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        className="border p-2 w-full mb-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Post</button>
    </form>
  );
}

export default CreatePost;
