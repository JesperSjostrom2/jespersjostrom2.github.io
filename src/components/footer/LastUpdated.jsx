import React, { useState, useEffect } from 'react';

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Get the last commit date from GitHub API
    const fetchLastUpdated = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/jespersjostrom2/jespersjostrom2.github.io/commits/master');
        const data = await response.json();
        if (data && data[0] && data[0].commit && data[0].commit.author) {
          const date = new Date(data[0].commit.author.date);
          setLastUpdated(date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }));
        }
      } catch (error) {
        console.error('Error fetching last updated date:', error);
        // Fallback to current date if API call fails
        setLastUpdated(new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }));
      }
    };

    fetchLastUpdated();
  }, []);

  return (
    <div className="last-updated">
      Last updated: {lastUpdated}
    </div>
  );
};

export default LastUpdated; 