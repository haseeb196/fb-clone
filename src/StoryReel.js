import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className='storyReel'>
   <Story  image="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" profileSrc="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" title='6gag' className='storyReel__story' />
   <Story image="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" profileSrc='https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png' title='525' className='storyReel__story' />
   <Story image="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" profileSrc='https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png' title='wha' className='storyReel__story'  />
   <Story image="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" profileSrc='https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png' title='awhw' className='storyReel__story'  />
   <Story image="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" profileSrc='https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png' title='akmwh' className='storyReel__story'  />
    </div>
  )
}

export default StoryReel