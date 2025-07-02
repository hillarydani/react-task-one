// src/App.js
import React from 'react';
import ProfileCard from './components/ProfileCard';
import profile from './profile.png';
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <ProfileCard
        name="Hillary Daniel"
        image={profile}
        bio="Frontend developer passionate about solving real-world problems with user-friendly web solutions."
      />
    </div>
  );
}

export default App;
