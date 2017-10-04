var person = {
	"name": "Evan",
	"grade": 9,
	"unrelatedFunction": function (arg) {console.log(arg);}
};

console.log(person.name);
console.log(person.grade);
person.unrelatedFunction("test");


function fibonacci(n) {
	if (n == 2 || n == 1) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

console.log(fibonacci(5));