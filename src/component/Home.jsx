import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
      <Link
  to="/create"
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 block w-fit mx-auto my-4"
>
  Create New Post
</Link>
      {posts.map(post => (
        <Link to={`/post/${post._id}`} key={post._id}>
          <div className="border p-2 mb-2 shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;