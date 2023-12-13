import express from 'express';
import Tache from './models/Tache.js';

const app = express();
app.use(express.urlencoded({ extended: true }));


app.post("/add", async function (req, res) {
  const task = new Tache();
  task.nom_tache = req.body.tache
  await task.save();
  res.redirect('/');
});

app.get("/delete/:tache_id", async function (req, res) {
  await Tache.delete({ tache_id: req.params.tache_id });
  res.redirect('/');
});

app.get("/", async function (req, res) {
  const taches = await Tache.loadMany();
  res.render('listTasks.ejs', { taches: taches });
});

const port = 3000;
app.listen(port, function () {
  console.log('Server is running on port ' + port + '...');
});

