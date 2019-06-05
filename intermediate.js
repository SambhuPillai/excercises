function FizzBuzz(divisibleByThree,divisibleByFive,limit) {
	for (i=1;i<=limit;i++) {
		if (i%3==0&&i%5==0) {
			console.log(divisibleByThree+divisibleByFive);
		}
		else if (i%3==0) {
			console.log(divisibleByThree);
		}
		else if (i%5==0) {
			console.log(divisibleByFive);
		}
	}
}
//FizzBuzz("Fizz","Buzz",10);

function IterateToOne(number) {
	var count=0;
	while(true) {
		if (number==1) {
			console.log("Number of iterations: "+count);
			break;
		}
		else if (number%3==0) {
			newnumber=number/3;
			console.log(number+"/3 = "+newnumber);
			number=newnumber;
			count++;
		}
		else if (number%3==1) {
			newnumber=(number-1)/3;
			console.log("("+number+"-1)/3 = "+newnumber);
			number=newnumber;
			count++;
		}
		else if (number%3==2) {
			newnumber=(number+1)/3;
			console.log("("+number+"+1)/3 = "+newnumber);
			number=newnumber;
			count++;
		}
	}
}
//IterateToOne(200);

function Triple(string) {
	var count=0;
	for (i=0;i<=string.length-1;i++) {
		if (string.charAt(i)==string.charAt(i+1) && string.charAt(i+1)==string.charAt(i+2)) {
			x=string.substring(i,i+3);
			console.log(x);
			count++;
		}
	}
	console.log("Number of triples: "+count);
}
//Triple("xxxabyyyycd");


var parents

function paragraph() {
	var p=document.createElement("p");
	var node=document.createTextNode("A new paragraph");
	p.appendChild(node); 
	var element=document.getElementById("para");
	element.appendChild(p);
	return node;
}
function changeTextInParagraph(node) {	
	node=document.getElementById("input");
}
