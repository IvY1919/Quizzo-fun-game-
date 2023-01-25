function buttonClick()
           	{
           		var total=0;
           		if(document.getElementById('q_0_a_0').checked)
           		    total+=parseInt(document.getElementById('q_0_a_0').value);
           		else if(document.getElementById('q_0_a_1').checked)
           		    total+=parseInt(document.getElementById('q_0_a_1').value);
                else if(document.getElementById('q_0_a_2').checked)
           		    total+=parseInt(document.getElementById('q_0_a_2').value);
           		else if(document.getElementById('q_0_a_3').checked)
           		    total+=parseInt(document.getElementById('q_0_a_3').value);
           		
           		if(document.getElementById('q_1_a_0').checked)
           		    total+=parseInt(document.getElementById('q_1_a_0').value);
           		else if(document.getElementById('q_1_a_1').checked)
           		    total+=parseInt(document.getElementById('q_1_a_1').value);
                else if(document.getElementById('q_1_a_2').checked)
           		    total+=parseInt(document.getElementById('q_1_a_2').value);
           		else if(document.getElementById('q_1_a_3').checked)
           		    total+=parseInt(document.getElementById('q_1_a_3').value);
           		
           		if(document.getElementById('q_2_a_0').checked)
           		    total+=parseInt(document.getElementById('q_2_a_0').value);
           		else if(document.getElementById('q_2_a_1').checked)
           		    total+=parseInt(document.getElementById('q_2_a_1').value);
                else if(document.getElementById('q_2_a_2').checked)
           		    total+=parseInt(document.getElementById('q_2_a_2').value);
           		else if(document.getElementById('q_2_a_3').checked)
           		    total+=parseInt(document.getElementById('q_2_a_3').value);
           		    
            	if(document.getElementById('q_3_a_0').checked)
           		    total+=parseInt(document.getElementById('q_3_a_0').value);
           		else if(document.getElementById('q_3_a_1').checked)
           		    total+=parseInt(document.getElementById('q_3_a_1').value);
                else if(document.getElementById('q_3_a_2').checked)
           		    total+=parseInt(document.getElementById('q_3_a_2').value);
           		else if(document.getElementById('q_3_a_3').checked)
           		    total+=parseInt(document.getElementById('q_3_a_3').value);
           		    
           		    if(document.getElementById('q_4_a_0').checked)
           		    total+=parseInt(document.getElementById('q_4_a_0').value);
           		else if(document.getElementById('q_4_a_1').checked)
           		    total+=parseInt(document.getElementById('q_4_a_1').value);
                else if(document.getElementById('q_4_a_2').checked)
           		    total+=parseInt(document.getElementById('q_4_a_2').value);
           		else if(document.getElementById('q_4_a_3').checked)
           		    total+=parseInt(document.getElementById('q_4_a_3').value);
           		    
           	          if(document.getElementById('q_5_a_0').checked)
           		    total+=parseInt(document.getElementById('q_5_a_0').value);
           		else if(document.getElementById('q_5_a_1').checked)
           		    total+=parseInt(document.getElementById('q_5_a_1').value);
                else if(document.getElementById('q_5_a_2').checked)
           		    total+=parseInt(document.getElementById('q_5_a_2').value);
           		else if(document.getElementById('q_5_a_3').checked)
           		    total+=parseInt(document.getElementById('q_5_a_3').value);
           		    
                      
           		
           		 var result;
           		if(total <=12)
           		{
           			result="You aren't very sensitive and sometimes you can be rude.";
           			result+="\n";
           			result+="Try to think of other people and be more thoughtful!";
           			
           		}
           		else if(total>=13 && total <=20)
           		{
           			result="You're friendly,sociable person.";
           			result+="\n";
           			result+="You're honest and quite generous.";
           			result+="\n";
           			result+="Sometimes you're sensitive, but try to think of others a bi more often.";
           			}
           			
           		else	if(total>=21 && total <= 30)
           		{
           			result="You are polite,generous and very sensitive.";
           			result+="\n";
           			result+="You aren't selfish and you always think of others.";
           			result+="\n";
           			result+="Did you answer the questions honestly?!.";
           			
           		}  	
           		
           			alert(result);
           	}
           	function validate(form)
{
	var errors=[];
	if(!checkRadioArray(f1.q_0_a)){
		errors[errors.length]="You left NO.1 questions!";
		//alert(errors.length);
	}
	
	if(!checkRadioArray(f1.q_1_a)){
		errors[errors.length]="You left No.2 questions!";
		}
		if(!checkRadioArray(f1.q_2_a)){
		errors[errors.length]="You left No.3 questions!";
			}
		if(!checkRadioArray(f1.q_3_a)){
		errors[errors.length]="You left No.4 questions!";
			}
		if(!checkRadioArray(f1.q_4_a)){
		errors[errors.length]="You left No.5 questions!";
			}
		if(!checkRadioArray(f1.q_5_a)){
		errors[errors.length]="You left No.6 questions!";
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
