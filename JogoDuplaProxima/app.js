const express = require('express');
const app = express();
const MergeSort = require('./DivideConquista/mergeSort.js');
const ClosestPoints = require('./DivideConquista/closestPoint.js');
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('', function (req, resposta) {
    resposta.sendFile(__dirname + "/public/index.html");

});

app.set('view engine', 'pug');
const closestPoints = new ClosestPoints();
app.post("/localiza", function (req, res) {

    localiza = req.body.pontos;
    var objeto = JSON.parse(localiza);
    var result = closestPoints.divideAndConquer(objeto);
    var distancia = result.distance;
    var pontoAx = result.pointA.x;
    var pontoAy = result.pointA.y;
    var pontoBx = result.pointB.x;
    var pontoBy = result.pointB.y;
    //result = JSON.stringify(result);
    //console.log(closestPoints.divideAndConquer(objeto));
    res.render('../views/index', {
        title: 'Ganhadores', distancia: distancia, pontoAx: pontoAx, pontoAy: pontoAy, pontoBx: pontoBx, pontoBy: pontoBy
    });

});




const testArray = [{ x: 1, y: 2 }, { x: 54, y: 12 }, { x: 45, y: 45 }, { x: 7, y: 0 }];
//console.log(closestPoints.divideAndConquer(testArray));

app.listen(3000, () => console.log("Tudo certo"));