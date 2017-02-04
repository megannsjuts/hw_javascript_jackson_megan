var iceCream = [

	'chocolate',
	'mint chocolate chip',
	'pistachio',
	'cookies and cream'
];

var presidents = [

	 {
		firstName: 'Donald',
		lastName: 'Trump',
		termLength: '1',
		party: 'Republican',
		yearsOfPresidency: '0',
	},

	{
		firstName: 'Barack',
		lastName: 'Obama',
		termLength: '2',
		party: 'Democrat',
		yearsOfPresidency: '8',
	},

	 {
		firstName: 'George W.',
		lastName: 'Bush',
		termLength: '2',
		party: 'Republican',
		yearsOfPresidency: '8',
	},

	{
		firstName: 'Bill',
		lastName: 'Clinton',
		termLength: '2',
		party: 'Democrat',
		yearsOfPresidency: '8',
	},

	{
		firstName: 'George',
		lastName: 'Bush',
		termLength: '1',
		party: 'Republican',
		yearsOfPresidency: '4',
	},
];

console.log(presidents[2]['firstName'] + ' ' + presidents[2]['lastName']);

function howdy(firstName, lastName, message) {
	return firstName + lastName + ' says ' + message;
}

var message = howdy('Megan', 'Sjuts', 'hello!');
console.log(message);

var numba = function (string) {

	if (string.length < 7) {
		console.log('What a short little word!');

} else if (string.length === 7) {
		console.log('7, what a perfect choice!');

} else {
		console.log('I’m sorry, but that’s too many to count.');
}
};

function inception(display, favMovie) {
	display(favMovie);
}

inception ()
