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
           		    
                       if(document.getElementById('q_6_a_0').checked)
           		    total+=parseInt(document.getElementById('q_6_a_0').value);
           		else if(document.getElementById('q_6_a_1').checked)
           		    total+=parseInt(document.getElementById('q_6_a_1').value);
                else if(document.getElementById('q_6_a_2').checked)
           		    total+=parseInt(document.getElementById('q_6_a_2').value);
           		else if(document.getElementById('q_6_a_3').checked)
           		    total+=parseInt(document.getElementById('q_6_a_3').value);
           		    
           		    if(document.getElementById('q_7_a_0').checked)
           		    total+=parseInt(document.getElementById('q_7_a_0').value);
           		else if(document.getElementById('q_7_a_1').checked)
           		    total+=parseInt(document.getElementById('q_7_a_1').value);
                else if(document.getElementById('q_7_a_2').checked)
           		    total+=parseInt(document.getElementById('q_7_a_2').value);
           		else if(document.getElementById('q_7_a_3').checked)
           		    total+=parseInt(document.getElementById('q_7_a_3').value);
           		    
           		     if(document.getElementById('q_8_a_0').checked)
           		    total+=parseInt(document.getElementById('q_8_a_0').value);
           		else if(document.getElementById('q_8_a_1').checked)
           		    total+=parseInt(document.getElementById('q_8_a_1').value);
                else if(document.getElementById('q_8_a_2').checked)
           		    total+=parseInt(document.getElementById('q_8_a_2').value);
           		else if(document.getElementById('q_8_a_3').checked)
           		    total+=parseInt(document.getElementById('q_8_a_3').value);
           		    
           		    if(document.getElementById('q_9_a_0').checked)
           		    total+=parseInt(document.getElementById('q_9_a_0').value);
           		else if(document.getElementById('q_9_a_1').checked)
           		    total+=parseInt(document.getElementById('q_9_a_1').value);
                else if(document.getElementById('q_9_a_2').checked)
           		    total+=parseInt(document.getElementById('q_9_a_2').value);
           		else if(document.getElementById('q_9_a_3').checked)
           		    total+=parseInt(document.getElementById('q_9_a_3').value);
           		   
           		//alert (total);
           		
           		 var result;
           		if(total>=100 && total < 200)
           		{
           			result="You are beautiful inside and out, but you don't know it.";
           			result+="\n";
           			result+="You feel like you can't compete with the more popular boys/girls.";
           			result+="\n";
           			result+="Next time when you look at in the mirror, for every flaw you see,";
           			result+="\n";
           			result+=" look for two things that you like about yourselfs";
           		}
           		else if(total>=200 && total < 300)
           		{
           			result="You think you are kindda pretty, but you are more than \"kindda\".";
           			result+="\n";
           			result+="You have a nice personality, you are gorgeous.";
           			result+="\n";
           			result+="Boys/girls secretely like you, but they are afraid you don't like them back.";
           			result+="\n";
           			result+="Try some new style and don't hesitate to be bold.";}
           			
           		else	if(total>=300 && total <= 400)
           		{
           			result="You are beautiful and you know it.";
           			result+="\n";
           			result+="Boys/girls are lining up but most of them won't like you for you.";
           			result+="\n";
           			result+="Try to find a boy/girl who likes your personality, not only your apperance.";
           			result+="\n";
           			result+="Also try to be yourself and not something everyone want to you be";
           			
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
		if(!checkRadioArray(f1.q_6_a)){
		errors[errors.length]="You left No.7 questions!";
			}
		if(!checkRadioArray(f1.q_7_a)){
		errors[errors.length]="You left No.8 questions!";
			}
		
		if(!checkRadioArray(f1.q_8_a)){
		errors[errors.length]="You left No.9 questions!";
			}
		if(!checkRadioArray(f1.q_9_a)){
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
  



