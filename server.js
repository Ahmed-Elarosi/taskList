const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bucketListItemRoutes = require('./routes/api/bucketListItem');

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_LOCAL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log('MongoDB database Connected...'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.use('/api/bucketListItems', bucketListItemRoutes);
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
