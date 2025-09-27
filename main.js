import express from 'express';

const app = express();
const PORT = process.env.PORT || 80;

// Middleware
app.use(express.json());
app.use(express.static('public')); // jeśli masz frontend

// Test endpoint
app.get('/api/test', (_req, res) => {
  res.json({ status: "ok", code: "204", show: false, message: "Backend conection ok."});
});

// Start server
app.listen(PORT, () => {
  console.log(`🎨 Paint backend działa na http://localhost:${PORT}`);
});