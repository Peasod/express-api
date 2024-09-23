import express from 'express';

const app = express();
const port = 3000;
const poke = process.env.POKE || "bulbasaur" ;
app.get('/', (req, res) => {
    res.send(`It's ${poke}!`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});