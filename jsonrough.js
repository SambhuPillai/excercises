var requestURL = 'https://gist.githubusercontent.com/DaleCarr/fd342f03dd55b45b95427751f16fea02/raw/3f693d011a8d4c570c8628476d7498cf32080840/example2.json';


var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();


request.onload = function() {
	var requestData = request.response;
	var container = document.getElementById("container");
	console.log(requestData);
	var x;

//for(var key in requestData){
    //for(var item in requestData[key]){
	//	console.log(requestData[key][item]);
	//	var myH1 = document.createElement('p');
	//	myH1.innerHTML = item + ": " + requestData[key][item];
	//	container.appendChild(myH1);
	//	}
	//}
//}

for(var i in requestData) {
			x+=requestData[i].name;
			x+=requestData[i].occupation;
			x+=requestData[i].age;
			
		}
	document.getElementById("container").innerHTML=x;
}
//var requestURL='https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
//var request=new XMLHttpRequest();
//request.open('GET',requestURL);
//request.responseType='json';
//request.send();
//request.onload=function() {
	//var requestData=request.response;
	//var example=document.getElementById("example");
//	console.log(requestData);
	//for (key in requestData) {
	//	for (item in requestData[key]) {
	//		console.log(requestData[key][item]);
	//		var p=document.createElement("p");
		//	p.innerHTML=item+":"+requestData[key][item];
	//		example.appendChild(p);
		//}
	//}
//}

		
