function validate(form)
{
	var errors=[];
	if(!checkRadioArray(f1.q1)){
		errors[errors.length]="You left NO.1 questions!";
		//alert(errors.length);
	}
	
	if(!checkRadioArray(f1.q2)){
		errors[errors.length]="You left No.2 questions!";
		}
		if(!checkRadioArray(f1.q3)){
		errors[errors.length]="You left No.3 questions!";
			}
		if(!checkRadioArray(f1.q4)){
		errors[errors.length]="You left No.4 questions!";
			}
		if(!checkRadioArray(f1.q5)){
		errors[errors.length]="You left No.5 questions!";
			}
		if(!checkRadioArray(f1.q6)){
		errors[errors.length]="You left No.6 questions!";
			}
		if(!checkRadioArray(f1.q7)){
		errors[errors.length]="You left No.7 questions!";
			}
		if(!checkRadioArray(f1.q8)){
		errors[errors.length]="You left No.8 questions!";
			}
		
		if(!checkRadioArray(f1.q9)){
		errors[errors.length]="You left No.9 questions!";
			}
		if(!checkRadioArray(f1.q10)){
		errors[errors.length]="You left No.10 questions!";
		}
	

	if(errors.length>0)
	{reportErrors(errors);
		return false;}
		return true;
}

function reportErrors(errors){
var msg = "You must answer all the questions.......\n";
var numError;
for (var i = 0; i<errors.length; i++) {
numError = i + 1;
msg += "\n" + numError + ". " + errors[i];
}
alert(msg);
}
function checkRadioArray(radioButtons){
for (var i=0; i < radioButtons.length; i++) {
if (radioButtons[i].checked) {
return true;
}
}
return false;
}