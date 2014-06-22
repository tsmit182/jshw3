//1
var eachPrice = items.map(function (a) {
	return a.price;
});

var sumPrice = eachPrice.reduce(function (a, b) {
	return a + b;
});

var actAvg = (sumPrice / eachPrice.length);
var rndAvg = actAvg.toPrecision(4)
console.log("The average price is $" + rndAvg)


//2
var pullPound = items.map(function (a) {
	if (a.currency_code === 'GBP')
		console.log (a.title)
	});
