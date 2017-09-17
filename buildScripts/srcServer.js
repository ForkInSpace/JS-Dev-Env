import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3001;

const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/users', function(req, res){
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1, "firstname": "Zaza","lastname": "Siviley","email": "ts.zaza@gmail.com"},
    {"id": 2, "firstname": "Bob","lastname": "House","email": "bobh@hotmail.com"},
    {"id": 3, "firstname": "Derek","lastname": "Malone","email": "derek.malonea@yahoo.com"}
  ]);
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err)
    console.log(err)
  else
    open('http://localhost:' + port);
})