//1
	return a.price;
});

var sumPrice = eachPrice.reduce(function (a, b) {
	return a + b;
});

var actAvg = (sumPrice / eachPrice.length);
var rndAvg = actAvg.toPrecision(4)
console.log(rndAvg)