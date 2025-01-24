const express = require('express');
const cors = require('cors');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Root route is working');
});

// User routes
app.use('/users', userRoutes);

let server; // Declare the server variable

db.sequelize.sync().then(() => {
  server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(error => console.error('Unable to connect to database:', error));

// Add the close method to stop the server
app.close = async () => {
  await server.close();
};

module.exports = app;
