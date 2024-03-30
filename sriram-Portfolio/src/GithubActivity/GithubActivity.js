import React, { useState, useEffect } from 'react';
import './Github.css'

const GitHubActivity = () => {
  const arr = [
    "https://github-readme-streak-stats.herokuapp.com?user=sriramalavalapati3&theme=radical&hide_border=true&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D",
    "https://github-readme-stats.vercel.app/api/top-langs/?username=sriramalavalapati3&theme=outrun",
    "https://github-readme-stats.vercel.app/api?username=sriramalavalapati3&count_private=true"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 2000); // Interval time in milliseconds

    return () => clearInterval(interval);
  }, [arr.length]);

  return (
    <div id="githubsection" style={{textAlign:'center'}}>
        <h1 style={{textAlign:'center'}}>Github Activity</h1>
      <img  id="image2" src={arr[index]} alt="GitHub Activity" />
    </div>
  );
};

export default GitHubActivity;
