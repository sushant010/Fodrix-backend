const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(bodyParser.json());
app.use(cors({
  origin: ["https://fodrix-frontend.vercel.app"],
  methods: ["POST", "GET"], 
  credentials: true 
}));

app.use(express.json());

const callbackRoutes = require('./routes/callbackRoutes');
const contactRoutes = require('./routes/contactRoutes');
const cityRoutes = require('./routes/cityRoutes');
// const cityController = require('./controllers/cityController');

const PORT = process.env.PORT;

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.use("/addCallBack", callbackRoutes);
app.use("/getCallbacks", callbackRoutes);
app.use('/contact', contactRoutes);
app.use('/getAllContactSubmissions', contactRoutes);
app.use('/cities', cityRoutes);





// Start the server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
