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



function paragraph() {
	var p=document.createElement("p");
	p.className ="Paragraph";
	var node=document.createTextNode("A new paragraph");
	p.appendChild(node); 
	var element=document.getElementById("para");
	element.appendChild(p);
}
function changeTextInParagraph() {	
	var y=document.getElementsByClassName("Paragraph");
	console.log(y);
	var x=document.getElementById("input").value;
	for(i=0;i<=y.length-1;i++){
		y[i].innerHTML=x;
	}
}
function deleteParagraph() {
	var y=document.getElementsByClassName("Paragraph");
	for(i=y.length-1;i>=0;i--){
		y[i].innerHTML="";
	}	
}
	
var requestURL='https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
var request=new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType='json';
request.send();
request.onload=function() {
	var requestData=request.response;
//	console.log(requestData);
	for(var members in requestData){
		for(var powers in requestData[members]){
			console.log(requestData[members][powers]);
			var myH1=document.create('h1');
			myH1.innerHTML=powers+";"+requestData[members][powers];
		}
	}
}
var requestURL='https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
var request=new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType='json';
request.send();
request.onload=function() {
	var i,j,k,x="";
	var requestData=request.response;
	//console.log(requestData);
	x+="<p> Squad Name: "+requestData.squadName+"</p>";
		x+="<p> Home Town: "+requestData.homeTown+"</p>";
		x+="<p> Formed: "+requestData.formed+"</p>";
		x+="<p> Secret Base: "+requestData.secretBase+"</p>";
		x+="<p> Active: "+requestData.active+"</p>";
		for(j in  requestData.members) {
			x+="<p><b>"+requestData.members[j].name+"</b></p>";
			x+="<p>"+requestData.members[j].age+"</p>";
			x+="<p>"+requestData.members[j].secretIdentity+"</p>";
			for(k in requestData.members[j].powers) {
				x+="<p>"+requestData.members[j].powers[k]+"</p>";
			}
		}
//	document.getElementById("example").innerHTML=x;
}

var requestURL='https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
var request=new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType='json';
request.send();
request.onload=function() {
	var i,x;
	var requestData=request.response;
	for (i in requestData) {
	x=requestData[i].nm;
	x+=requestData[i].cty;
	x+=requestData[i].hse;
	x+=requestData[i].yrs;
	console.log(x);
	}
	document.getElementById("royal").innerHTML=x;
}



		