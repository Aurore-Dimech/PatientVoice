const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const indexRoutes = require('./routes/index');
const centerRoutes = require('./routes/centers');
const formRoutes = require('./routes/forms');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/centers', centerRoutes);
app.use('/forms', formRoutes);

// Database sync and start server
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Database sync failed:', error);
});