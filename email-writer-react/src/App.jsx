import { useState } from 'react';
import {
  Box,
  Select,
  TextField,
  Typography,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  CircularProgress,
  Paper,
  Divider
} from '@mui/material';
import axios from 'axios';
import './App.css';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [geminiUrl, setGeminiUrl] = useState('');
  const [geminiKey, setGeminiKey] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setGeneratedReply('');

    try {
      const response = await axios.post(
        'https://email-writer-backend-vigy.onrender.com/api/email/generate',
        {
          emailContent,
          tone,
          geminiUrl,
          geminiKey
        }
      );

      setGeneratedReply(
        typeof response.data === 'string'
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError('Failed to generate email reply. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="app">
      <Container maxWidth="md">

        <Box className="header">
          <Typography className="badge">
            AI POWERED
          </Typography>

          <Typography variant="h2" className="title">
            Email Reply Generator
          </Typography>

          <Typography className="subtitle">
            Generate professional email replies in seconds.
          </Typography>
        </Box>

        <Paper className="card">

          <Typography variant="h6" className="section-title">
            Write your reply
          </Typography>

          <Typography className="section-description">
            Paste an email and let AI create a reply for you.
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={7}
            label="Original Email Content"
            placeholder="Paste the email you want to reply to..."
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            margin="normal"
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Tone</InputLabel>

            <Select
              value={tone}
              label="Tone"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
            className="generate-button"
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || !geminiUrl || !geminiKey || loading}
            fullWidth
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Generate Reply'
            )}
          </Button>

          {error && (
            <Typography className="error-message">
              {error}
            </Typography>
          )}

          <Divider sx={{ my: 3 }} />

          <Button
            className="settings-button"
            onClick={() => setShowSettings(!showSettings)}
          >
            ⚙ API Settings
            <span>{showSettings ? '▲' : '▼'}</span>
          </Button>

          {showSettings && (
            <Box className="settings-box">

              <Typography className="settings-description">
                Enter your Gemini API credentials. These are required to
                generate replies.
              </Typography>

              <TextField
                fullWidth
                label="Gemini API URL"
                value={geminiUrl}
                onChange={(e) => setGeminiUrl(e.target.value)}
                margin="normal"
              />

              <TextField
                fullWidth
                type="password"
                label="Gemini API Key"
                value={geminiKey}
                onChange={(e) => setGeminiKey(e.target.value)}
                margin="normal"
              />

            </Box>
          )}

        </Paper>

        {generatedReply && (
          <Paper className="card reply-card">

            <Typography variant="h6" className="section-title">
              Generated Reply
            </Typography>

            <Typography className="section-description">
              Your AI-generated response is ready.
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={8}
              value={generatedReply}
              slotProps={{
                htmlInput: {
                  readOnly: true
                }
              }}
            />

            <Button
              variant="outlined"
              className="copy-button"
              onClick={() =>
                navigator.clipboard.writeText(generatedReply)
              }
            >
              Copy Reply
            </Button>

          </Paper>
        )}

        <Typography className="footer">
          Built with React, Spring Boot & Gemini
        </Typography>

      </Container>
    </Box>
  );
}

export default App;