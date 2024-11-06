const express = require('express');
const app = express();
const ass1Routes = require('./routes/ass1routes');  


app.use('/', ass1Routes);


const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
