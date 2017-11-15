function recordForm(form) {
	var name = form.name.value;
	for (let i = 0; i < 3; i++) {
        if (form.flavor[i].checked) {
        	var flavor = form.flavor[i].value;
        }
    }
	document.getElementById("recognizeSubmission").textContent = name + " chose " + flavor;
}