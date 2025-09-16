import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [connected, setConnected] = useState(false);

  return (
    <div className="dashboard">
      <h1>Mirror Sync Dashboard</h1>
      <div className="trading-interface">
        <div className="trader-list">
          <h2>Top Traders</h2>
          {/* Trader components will go here */}
        </div>
        <div className="portfolio">
          <h2>Your Portfolio</h2>
          {/* Portfolio components will go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
