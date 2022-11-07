// 1.

const results = ["Yes", "No", "Maybe", "No", "Yes"];

let noCount = 0;
let yesCount = 0;
let maybeCount = 0;

for (const entry of results) {
// or for (let i = 0; i < results.length; i++)
	if (entry === 'No')
		noCount++;
	else if (entry === 'Yes')
		yesCount++;
	else
		maybeCount++;
}

console.log(noCount, yesCount, maybeCount);

// 2.

const ages = [5, 10, 18, 20, 25];

let olderCount = 0;
let youngerCount = 0;

for (const entry of ages) {
	if (entry < 18)
		youngerCount++;
	else
		olderCount++;
}

console.log(olderCount, youngerCount);

// 3.

const prices = [15, 30, 45, 49, 60];

let smallCount = 0;
let mediumCount = 0;
let highCount = 0;

for (let i = 0; i < prices.length; i++) {
	const entry = prices[i];

	// a.

	if (entry < 20)
		smallCount++;
	else if (entry < 50)
		mediumCount++;
	else
		highCount++;

	// b.

	prices[i] += 2;

	// c.

	prices[i] *= 1.05;

	// d.

	prices[i] *= 0.80;
}

console.log(smallCount, mediumCount, highCount);
console.log(prices);
