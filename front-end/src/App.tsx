import axios from 'axios';
import logo from './logo.svg';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';
import './App.css';

interface ApiData {
  id?: number;
  email?: string;
  error?: string;
}

function App() {
  const [testData, setTestData] = useState<string | null>(null);

  const makeRequestToApiService = async () => {
    try {
      const response = await axios.get<ApiData>('/api/currentUser');
      // Format the JSON data with 2 spaces for readability
      setTestData(JSON.stringify(response.data, null, 2));
    } catch (error: any) {
      console.error('Failed to fetch data:', error);
      setTestData('Failed to fetch data');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={makeRequestToApiService} variant="contained">Api Request</Button>
        {testData && (
          <Card variant="outlined" sx={{ backgroundColor: '#1e1e1e', marginTop: 2, overflow: 'auto' }}>
            <CardContent>
              <Typography style={{ whiteSpace: 'pre-wrap', color: 'white', fontFamily: 'monospace' }}>
                {testData}
              </Typography>
            </CardContent>
          </Card>
        )}
      </header>
    </div>
  );
}

export default App;
