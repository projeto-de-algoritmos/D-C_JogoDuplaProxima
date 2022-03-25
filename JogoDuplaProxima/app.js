const express = require('express');
const app = express();
const MergeSort = require('./DivideConquista/mergeSort.js');
app.use(express.static('public'));


app.get('', function (req, resposta) {
    resposta.sendFile(__dirname + "/public/index.html");

});



//teste
var vet = [5, 1, 2, 4, 3, 8];

var ordena = new MergeSort()
ordena.mergeSort(vet, 0, vet.length);
console.log(vet);


app.listen(3000, () => console.log("Tudo certo"));