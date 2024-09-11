import { useEffect, useState } from 'react';

const WalletPage = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3000/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => setUsername(data.username));
    }
  }, []);

  return (
    <div>
      <h1>Wallet Page</h1>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default WalletPage;
