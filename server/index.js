const express = require('express');

const app = express();
const PORT = 1412;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});