const express = require("express");
const app = express();
const PORT = 3000;
const router = require('./routes/appRouters');
const prefix = "/movies-4";


app.use(express.json());
app.use(`${prefix}/`, router);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})



