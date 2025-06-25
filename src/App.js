import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css'
import logo from './profile.png';

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="Hillary Daniel"
        image={logo}
        // image="https://your-profile-image-link.com/photo.jpg"
        // image="../public/profile.png"
        // image='<img src={logo} className="App-logo" alt="logo" />'
        bio="Hillary Daniel Ifeanyi is a dynamic entrepreneur, frontend developer, and community builder with a strong background in Insurance and Nursing Science. Currently serving as the CEO of FindRoomy, Hillary is on a mission to simplify the process of securing accommodation, offering logistics and essential home services to ease relocation for students and young professionals across Nigeria.

With a passion for solving real-life problems through tech, Hillary also leads the development of Aguro, an agric-tech platform that connects farmers directly to consumers and combats food waste. His vision is rooted in innovation, education, and empowerment — using technology to create practical solutions that improve lives.

A spoken word artist in the making and a lover of chess, Hillary thrives on creative expression and strategic thinking. He has organized impactful webinars, built strong online communities, and is currently honing his skills in JavaScript and React through hands-on projects and intensive learning.

Whether he’s training sales teams, mentoring aspiring developers, or building scalable platforms, Hillary is driven by a relentless pursuit of excellence, growth, and service to humanity.

."
      />
    </div>
  );
}

export default App;
