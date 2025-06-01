import { useParams , useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import posts from '../data/posts';
import comments from '../data/comments';


const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = posts.find(p => p.id.toString() === id);
  const postComments = comments.filter(c => c.postId.toString() === id);

  
  
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [allComments, setAllComments] = useState(postComments);
  
  
  
  if (!post) {
    return <h2>Post not found</h2>;
  }
  
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();


    if(!author || !text) {
      alert("Please fill in all fields");
      return;
    }
  
   const newComment = {
    id: allComments.length + 1 , // simple ID
    postId: post.id,
    author,
    text,
    date: new Date().toISOString()
   }
    setAllComments([...allComments, newComment]);
    setAuthor('');
    setText('');
  }

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    
    <h3>Comments:</h3>
      {allComments.length > 0 ? (
        <ul>
          {allComments.map(comment => (
            <li key={comment.id}>
              <strong>{comment.author}:</strong> {comment.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
      
      <h3>Add a Comment:</h3>
       <form onSubmit={handleSubmit}>
        <input
        type="text" 
        placeholder="Your Name" 
        value={author}
        onChange={(e)=> setAuthor(e.target.value)} />
        <textarea 
        placeholder="Your Comment" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostDetails
