const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));