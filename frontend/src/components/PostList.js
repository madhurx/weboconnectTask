import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import api from '../services/api';
import './PostList.css';

const PostList = ({ posts }) => {
  const [error, setError] = useState(null);
  const { auth } = useContext(AuthContext);

  const handleLike = async (postId) => {
    try {
      await api.post(`/posts/${postId}/like`);
      // Refresh the posts or update the like count accordingly
    } catch (error) {
      setError(error.response.data.message);
      console.error('Failed to like post');
    }
  };

  const handleFollow = async (userId) => {

    try {
      await api.post('/users/follow', { followingId: userId });
      // Refresh the follow status or update the UI accordingly
    } catch (error) {
      setError(error.response.data.message);
      console.error('Failed to follow user');
    }
  };

  return (
    <div className="post-list">
      {posts && posts.map((post) => (
        <div key={post.id} className="post bg-white p-4 mb-4 rounded shadow">
          <h3 className="font-bold">{post.author.username}</h3>
          <p>{post.content}</p>
          {
            error && <p className="text-red-500">{error}</p>
          }
          <div className="flex justify-between mt-2">
            <button
              onClick={() => handleLike(post.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Like
            </button>
            <button
              onClick={() => handleFollow(post.userId)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;