const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const PORT = 42425;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

