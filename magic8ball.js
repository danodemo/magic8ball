let userName = 'Dan';
let userQuestion = '\'Will I get a job from these silly exercises?\' ';
let eightBall = '';

const randomNumber = Math.floor(Math.random() * 8);

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log('It appears as though ' + userName + ' has a question: ' + userQuestion);
console.log('Now querying the Magic 8 Ball, please hold for response...');

switch (eightBall){
	case 0:
		eightBall = 'Doesn\'t seem likely.';
		break;
	case 1:
		eightBall = 'No freakin\' way.';
		break;
	case 2:
		eightBall = 'Outlook: positive!';
		break;
	case 3:
		eightBall = 'Definitely maybe, that is assured.';
		break;
	case 4:
		eightBall = 'There is a lot of potential for a maybe in the cards.';
		break;
	case 5:
		eightBall = 'Not a chance.';
		break;
	case 6:
		eightBall = 'Probably not, but who knows.';
		break;
	case 7:
		eightBall = 'Absolutely!  As soon as pigs fly.';
		break;
	default:
		eightBall = 'Sure.';
		break;
}