const express = require('express');
const app = express();
const MergeSort = require('./DivideConquista/mergeSort.js');
const ClosestPoints = require('./DivideConquista/closestPoint.js');
app.use(express.static('public'));


app.get('', function (req, resposta) {
    resposta.sendFile(__dirname + "/public/index.html");

});



//teste
var vet = [5, 1, 2, 4, 3, 8];

var ordena = new MergeSort()
ordena.mergeSort(vet, 0, vet.length);
console.log(vet);


const closestPoints = new ClosestPoints();

const testArray = [{ x: 1, y: 2 }, { x: 54, y: 12 }, { x: 45, y: 45 }, { x: 7, y: 0 }];
console.log(closestPoints.divideAndConquer(testArray));

app.listen(3000, () => console.log("Tudo certo"));