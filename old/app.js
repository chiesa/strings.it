const fs = require('fs');
const express = require('express')

//express app
const app = express();
app.use(express.static(__dirname));

// 
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
    res.render(`index`, { title: 'home' });
  })

app.get('/strumenti', (req, res) => {
  res.render(`strumenti`, {title:'immagini'});
})

app.get('/temp', (req, res) => {
  res.sendFile(`./temp.html`, { title: 'dove siamo' });
})

app.get('/lavori', (req, res) => {
    res.render(`lavori`, { title: 'lavori' });
  })

app.get('/dove', (req, res) => {
    res.render(`dove`, { title: 'dove siamo' });
  })

app.get('/chi', (req, res) => {
    res.render(`chi`, { title: 'about me' });
  })

app.use((req,res) => {
  res.status(404).render(`404.html`);
})

