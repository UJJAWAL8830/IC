import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Feedback submission endpoint
app.post('/api/feedback', (req, res) => {
  const feedback = req.body;
  
  console.log('--- NEW FEEDBACK RECEIVED ---');
  console.table(feedback);
  console.log('-----------------------------');
  
  // In a real app, you would save this to a database like MongoDB or PostgreSQL.
  // For now, we are just acknowledging receipt as per your "no database" request.
  
  res.status(200).json({ 
    message: 'Feedback received successfully!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Neo-Brutalist Backend running on http://localhost:${PORT}`);
});
