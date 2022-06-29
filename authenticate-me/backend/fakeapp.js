const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message:"whyyyy"});
  });

  app.listen(9000, () => console.log(`Listening on port ${9000}...`));
