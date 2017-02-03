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

function howdy(person, message) {
	return person + 'says' + message;
}

var message = howdy('Megan Sjuts', 'hello!');
console.log(message);
