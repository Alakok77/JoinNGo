const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const auth = require('./script/register/auth')

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', auth)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
