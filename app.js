const fs = require('fs');
const express = require('express')

//express app
const app = express();
app.use(express.static(__dirname));

app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`, { name: 'index' });
  })

app.get('/strumenti.html', (req, res) => {
  res.sendFile(`${__dirname}/strumenti.html`, {name:'index'});
})

app.get('/lavori.html', (req, res) => {
    res.sendFile(`${__dirname}/lavori.html`, { name: 'index' });
  })

app.get('/dove.html', (req, res) => {
    res.sendFile(`${__dirname}/dove.html`, { name: 'index' });
  })

app.get('/chi.html', (req, res) => {
    res.sendFile(`${__dirname}/chi.html`, { name: 'index' });
  })

app.use((req,res) => {
  res.status(404).sendFile(`${__dirname}/404.html`);
})

