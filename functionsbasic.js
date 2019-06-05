function square() {
	var number=parseInt(prompt("Enter a number"));
	square=number*number;
	console.log(square);
	
}
//square();
function squaring(number) {
	squarenumber=number*number;
	console.log(squarenumber);
}
//squaring(10);





function sum() {
	var first=parseInt(prompt("Enter a number"));
	var second=parseInt(prompt("Enter a number"));
	var third=parseInt(prompt("Enter a number"));
	add=first+second+third;
	console.log(add);
}
//sum();


function cube(number) {
	cubeOut=number*number*number;
	return cubeOut;
}





//alert(num);



function stringConvert() {
	var string=prompt("Enter something");
	return newstring;
}
	
	
	
	
	
//alert(cube(parseInt(stringConvert())));


function input(string) {
	console.log(string);
}

var person={

};	

function textbox() {
	person.name=document.getElementById("name").value;
	person.age=document.getElementById("age").value;
	person.occupation=document.getElementById("occupation").value;
//	console.log(person);
	agerange();
}
function agerange() {
	if (person.age>20&&person.age<40) {
//		console.log("True");
	}
	else {
//		console.log("False");
	}
}

var string="\"He said \"My name is Elliott\"\"";
//console.log(string);
//console.log(string.toUpperCase());

var number=9;
//console.log(string+number);

var words=["Sam's", "the", "best"];
//console.log(words);
words.push("always");
//console.log(words);
//delete words[3];
//console.log(words);
words.splice(3,1);
//console.log(words);



function loop() {
	for (i=1;i<=10;i++) {
		if (i%2==0)
		console.log(i);
	}
}
loop();