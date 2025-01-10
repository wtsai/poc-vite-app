import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [serverInfo, setServerInfo] = useState({
    server_name: "Loading...",
    remote_addr: "Loading...",
    host: "Loading...",
    http_user_agent: "Loading...",
    http_referer: "Loading...",
    http_range: "Loading...",
  });

  useEffect(() => {
    const fetchServerInfo = async () => {
      const response = await fetch("/api/server-info");
      const data = await response.json();
      setServerInfo(data);
    };

    fetchServerInfo();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React - port 3031</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Server Info Card */}
      <div className="card mt-4">
        <div className="card-header">Server Info</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Server Name: {serverInfo.server_name}</li>
          <li className="list-group-item">Remote Address: {serverInfo.remote_addr}</li>
          <li className="list-group-item">Host: {serverInfo.host}</li>
          <li className="list-group-item">User Agent: {serverInfo.http_user_agent}</li>
          <li className="list-group-item">Referer: {serverInfo.http_referer}</li>
          <li className="list-group-item">Range: {serverInfo.http_range}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
