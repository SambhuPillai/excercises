function p(personToPrint) {
	return "Name: "+personToPrint.name  +", Age: "+personToPrint.age +", Occupation: "+personToPrint.occupation;
}

var person ={
	name:"Sam",
	age:16,
	occupation:"Prime Minister"
}

function buttonclick() {
person.age++;
console.log(p(person));
}