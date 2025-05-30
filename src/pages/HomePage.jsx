import posts from './data/posts';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Latest Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <p><strong>Author {post.author}</strong></p> 
            <p> Date: {post.date}</p>
            <Link to={`/posts/${post.id}`}>Read More</Link> 
       </div>
      ))}
    </div>
  )
}

export default HomePage
