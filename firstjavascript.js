//var person = {
//	name: "Sam",
//	age: 21,
//	occupation: "Prime minister",
//	status: "Legendary"
//	};
function personname() { 
	var name;
	while (true) {
		name=prompt("Please enter your name");
		if	(name!="") {
			break;
		}
	}
	console.log("Name: "+name);
}
function personage() { 
	var age;
	while (true) {
		age=prompt("Please enter your age");
		if	(age!="") {
			break;
		}
	}
	console.log("Age: "+age);
}
function personoccupation() { 
	var occupation;
	while (true) {
		occupation=prompt("Please enter your occupation");
		if	(occupation!="") {
			break;
		}
	}
	console.log("Occupation: "+occupation);
}
function personstatus() { 
	var status;
	while (true) {
		status=prompt("Please enter your status");
		if	(status!="") {
			break;
		}
	}
	console.log("Status: "+status);
}
personname();
personage();
personoccupation();
personstatus();

	
//	var status=prompt("Please enter you current status");
//
//console.log("Age: "+age);
//console.log("Occupation: "+occupation);
//console.log("Status: "+status);
//}
//person();
	
//document.write(person.name+", "+person.age+", "+person.occupation+", "+person.status);
//alert(person.name+" "+person.age);
//console.log(person.occupation);
