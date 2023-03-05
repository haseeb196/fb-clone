
import { AccountCircle, ChatBubbleOutline, Delete, ExpandMoreOutlined, NearMe, ThumbUp } from '@mui/icons-material';
import { Avatar, CircularProgress, IconButton } from '@mui/material';
import db from './firebase';
import React from 'react';
import './Post.css';
function Post({id ,profilePic, image, username, timestamp, message}) {
  const deletepost = () => {
    db.collection('posts').doc(id).delete();
  
   }

  return (
    <div className='post'>
    <div className='main-top'>
      <div className="post__top">
        <Avatar src={profilePic} className='post__avatar'/>
        <div className="post__topInfo">
          <h3>{username}</h3>
          {timestamp ? (
            <p>{new Date(timestamp.toDate()).toUTCString()}</p>
          ) : (
            <CircularProgress size="1rem" />
          )}
          
        </div>
      </div>
      <div onClick={deletepost} className='delete'><IconButton><Delete /></IconButton></div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
     <div className="post__image">
       <img src={image} alt="" />
     </div>
     <div className="post__options">

      <div className="post__option">
        <ThumbUp />
        <p>Like</p>
      </div>
      <div className="post__option">
       <ChatBubbleOutline />
        <p>Comment</p>
      </div>
      <div className="post__option">
        <NearMe />
        <p>Share</p>
      </div>
      <div className="post__option">
        <AccountCircle />
        <ExpandMoreOutlined />
       
      </div>
     </div>
    </div>
  )
}

export default Post;