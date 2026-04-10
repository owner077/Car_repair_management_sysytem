// 1. Import packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// 2. Import DB connection
const connectDB = require('./config/db');

// 3. Import Routes
const carRoutes = require('./routes/carRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const serviceRecordRoutes = require('./routes/serviceRecordRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// 4. Init app
const app = express();

// 5. Middleware
app.use(express.json());
app.use(cors());

// 6. Connect Database
connectDB();

// 7. Routes (IMPORTANT 🔥)
app.use('/api/cars', carRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/service-records', serviceRecordRoutes);
app.use('/api/payments', paymentRoutes);

// 8. Test route
app.get('/', (req, res) => {
  res.send('CRPMS Backend irakora neza 🚀');
});

// 9. Port
const PORT = process.env.PORT || 5000;

// 10. Start server
app.listen(PORT, () => {
  console.log(`Server iri kuri port ${PORT}`);
});

// 11. Debug ENV (optional)
console.log("ENV TEST:", process.env.MONGO_URI);