import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post.js';
import StoryReel from './StoryReel';
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => 
   setPosts(snapshot.docs.map((docs) => ({id: docs.id, data : docs.data()})))
    );
  }, []);
  return (
    <div className='feed'>
   <StoryReel />
  <MessageSender />
  
   {posts.map((post) => (
    <Post  
   key={post.id}
   id={post.id}
   profilePic={post.data.profilePic}
   message={post.data.message}
   timestamp={post.data.timestamp}
   username={post.data.username}
   image={post.data.image}
    />
  ) )}
    </div>
  )
}

export default Feed