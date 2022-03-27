const express = require('express');
const app = express();
const MergeSort = require('./DivideConquista/mergeSort.js');
const ClosestPoints = require('./DivideConquista/closestPoint.js');
app.use(express.static('public'));


app.get('', function (req, resposta) {
    resposta.sendFile(__dirname + "/public/index.html");

});

const closestPoints = new ClosestPoints();

const testArray = [{ x: 1, y: 2 }, { x: 54, y: 12 }, { x: 45, y: 45 }, { x: 7, y: 0 }];
console.log(closestPoints.divideAndConquer(testArray));

app.listen(3000, () => console.log("Tudo certo"));