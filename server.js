var express = require('express');
const app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000, () => console.log('Waiting app longs for you on port 3000!'));