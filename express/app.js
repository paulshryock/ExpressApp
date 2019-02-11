'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send( 'Hello world!' );
});

app.get('/api/courses', (req, res) => {

	let data = [1, 2, 3];

  res.send( data );
});

app.get('/api/courses/:id', (req, res) => {
	// res.send(req.params);
	// res.send(req.query);
	res.send(req.params.id);
});

// To set a local bash environment variable:
// `export PORT=5000`
const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log( `Listening on port ${port}` );
});