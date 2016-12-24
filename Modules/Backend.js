var books = [
{
	id: 1,
	title: "Beginning Android Programming",
	author: "J.F DiMarzio",
	authorbio: "About DiMarzio",
	publicationdate: "2017 by John Wiley & Sons",
	introduction: "This book is written to help start beginning Android developers ",
	picture: "Assets/books/android.png",
	cost: 25.00
},
{
	id: 2,
	title: "ES6 & Beyound",
	author: "Kyle Simpson",
	authorbio: "Kyle Simpson is a thorough pragmatist.",
	publicationdate: "2015-5-5",
	introduction: "This book is about shaking up your sense of understanding by exposing you ",
	picture: "Assets/books/es6.png",
	cost: 35.99
},
{
	id: 3,
	title: "ng-book 2",
	author: "Ari Lerner",
	authorbio: "Full stack web developer and trainer.",
	publicationdate: "2016-5-10",
	introduction: "A complete refernce book on angular 2. ",
	picture: "Assets/books/ngbook21.png",
	cost: 25.99
},
{
	id: 4,
	title: "Pro Git",
	author: "Scott Chacon and Ben Straub",
	authorbio: "Full stack web developer and trainer.",
	publicationdate: "2016-5-10",
	introduction: "Welcome to the second edition of Pro Git.  ",
	picture: "Assets/books/progit.png",
	cost: 45.99
},
{
	id: 5,
	title: "Reactjs Blueprints",
	author: "Sven A. Robbestad",
	authorbio: "Sven A. Robbestad is a developer with a keen interest in the Web .",
	publicationdate: "2016-7-10",
	introduction: "ReactJS was developed as a tool to solve a problem with the application state. ",
	picture: "Assets/books/reactjsblue.png",
	cost: 20.99
},
{
	id: 6,
	title: "ReAwaken The Giant Within",
	author: "Tony Robins",
	authorbio: "Tony Robbins is one of the great influences of this generation.",
	publicationdate: "2013-5-10",
	introduction: "I’m sending you this gift of a condensed version of my 544-page original book in the hope",
	picture: "Assets/books/awaken.png",
	cost: 22.00
},
{
	id: 7,
	title: "SurviveJS",
	author: "Juho Vapsalainen",
	authorbio: "Full stack web developer and trainer.",
	publicationdate: "2016-5-10",
	introduction: "Front-end development moves forward fast.  ",
	picture: "Assets/books/survivejs.png",
	cost: 25.99
},
{
	id: 8,
	title: "Switching To Angular2",
	author: "Minko Gechev",
	authorbio: "Minko Gechev is a software engineer who strongly believes in open source software. ",
	publicationdate: "March 2016",
	introduction: "It is the modern framework you need to build performant and robust web applications.",

	picture: "Assets/books/switchingto.png",
	cost: 21.00
},
{
	id: 9,
	title: "Unlimited Sales Success",
	author: "Brian Tracy",
	authorbio: "A world class motivational and sales consultant.",
	publicationdate: "2013-2-10",
	introduction: "A complete refernce book on todays selling. ",
	picture: "Assets/books/selling.png",
	cost: 25.99
},
{
	id: 10,
	title: "Web Development with Node and ExpressJS",
	author: "Ethan Brown",
	authorbio: "A senior software engineer at PoP Art.",
	publicationdate: "2014-6-27",
	introduction: "Learn to build modern web applications with node and expressjs ",
	picture: "Assets/books/node.png",
	cost: 19.99
}
];

function getBooks() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(books);
        }, 0);
    });
}

module.exports = {
	getBooks: getBooks
};
