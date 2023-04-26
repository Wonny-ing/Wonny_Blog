import React from 'react';
import Title from './Title';
import LatestPostedSection from './LatestPostedSection';
import TagSection from './TagSection';
import FollowSection from './FollowSection';
import UserInfoSection from './UserInfoSection';

export default function Footer() {
  return (
    <footer className='mx-auto'>
      <LatestPostedSection />
      <TagSection />
      <FollowSection />
      <UserInfoSection />
      <div>
        <Title />
        <p>Published with WordPress & EstudioPatagon</p>
      </div>
    </footer>
  );
}
