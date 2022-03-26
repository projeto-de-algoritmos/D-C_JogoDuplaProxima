module.exports = class ClosestPoints {

    constructor() { }

    divideAndConquer(points) {
        this.points = points;

        points.sort((a, b) => a.x - b.x);
        this.pointsOrderedByX = points.slice();

        points.sort((a, b) => a.y - b.y);
        this.pointsOrderedByY = points.slice();

        let result = this.closestPair(this.pointsOrderedByX);
        return { distance: result.distance, pointA: result.pointA, pointB: result.pointB };
    }

    closestPair(points) {
        if (points.length <= 3) {
            let bruteResult = this.loop(points);
            return bruteResult;
        }

        let middleIndex = Math.floor(points.length / 2);
        let middlePoint = points[middleIndex];
        let leftPoints = points.slice(0, middleIndex);
        let rightPoints = points.slice(middleIndex);
        let leftResult = this.closestPair(leftPoints);
        let rightResult = this.closestPair(rightPoints);
        let combinedResult = leftResult.distance < rightResult.distance ? leftResult : rightResult;
        let strip = [];

        for (let i = 0; i < points.length; i++) {

            let point = points[i];

            if (Math.abs(point.x - middlePoint.x) <= combinedResult.distance && point.x >= points[0].x && point.x <= points[points.length - 1].x) {
                strip.push(point);
            }
        }

        let stripResult = this.minimumDistance(strip, combinedResult.distance);
        let totalResult = stripResult.distance < combinedResult.distance ? stripResult : combinedResult;

        return totalResult;
    }

    loop(points) {
        let minDistance = Number.MAX_VALUE; //Pegando o valor máximo possível em JS
        let pointA, pointB;

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                let distance = this.distance(points[i], points[j]);

                if (distance < minDistance) {
                    minDistance = distance;
                    pointA = points[i];
                    pointB = points[j];
                }
            }
        }
        return { distance: minDistance, pointA, pointB };
    }

    distance(first, second) {
        return Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2));
    }

    minimumDistance(strip, d) {

        let minDistance = d;
        let pointA, pointB;

        for (let i = 0; i < strip.length; i++) {
            for (let j = i + 1; j < strip.length && (strip[j].y - strip[i].y) < d; j++) {
                if (this.distance(strip[i], strip[j]) < minDistance) {

                    minDistance = this.distance(strip[i], strip[j]);
                    pointA = strip[i];
                    pointB = strip[j];
                }
            }
        }
        return { distance: minDistance, pointA, pointB };
    }
}