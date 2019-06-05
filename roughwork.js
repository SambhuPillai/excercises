var company;

while (true) {
    company = prompt("What the name of the company that developed the javascript language?", "");
    if (company == 'netscape') {
        break;
    }
	else {
		alert("wrong answer");
	}
}
alert("correct answer!");