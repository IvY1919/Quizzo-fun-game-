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
           		else if(document.getElementById('q_0_a_4').checked)
           		    total+=parseInt(document.getElementById('q_0_a_4').value);
           		
           		if(document.getElementById('q_1_a_0').checked)
           		    total+=parseInt(document.getElementById('q_1_a_0').value);
           		else if(document.getElementById('q_1_a_1').checked)
           		    total+=parseInt(document.getElementById('q_1_a_1').value);
                else if(document.getElementById('q_1_a_2').checked)
           		    total+=parseInt(document.getElementById('q_1_a_2').value);
           		else if(document.getElementById('q_1_a_3').checked)
           		    total+=parseInt(document.getElementById('q_1_a_3').value);
           		           		else if(document.getElementById('q_0_a_4').checked)
           		    total+=parseInt(document.getElementById('q_0_a_4').value);
           		    
           		if(document.getElementById('q_2_a_0').checked)
           		    total+=parseInt(document.getElementById('q_2_a_0').value);
           		else if(document.getElementById('q_2_a_1').checked)
           		    total+=parseInt(document.getElementById('q_2_a_1').value);
                else if(document.getElementById('q_2_a_2').checked)
           		    total+=parseInt(document.getElementById('q_2_a_2').value);

           		    
            	if(document.getElementById('q_3_a_0').checked)
           		    total+=parseInt(document.getElementById('q_3_a_0').value);
           		else if(document.getElementById('q_3_a_1').checked)
           		    total+=parseInt(document.getElementById('q_3_a_1').value);
                else if(document.getElementById('q_3_a_2').checked)
           		    total+=parseInt(document.getElementById('q_3_a_2').value);
      
           		    
           		    if(document.getElementById('q_4_a_0').checked)
           		    total+=parseInt(document.getElementById('q_4_a_0').value);
           		else if(document.getElementById('q_4_a_1').checked)
           		    total+=parseInt(document.getElementById('q_4_a_1').value);
                else if(document.getElementById('q_4_a_2').checked)
           		    total+=parseInt(document.getElementById('q_4_a_2').value);

           		    
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
   
           		    
           		    if(document.getElementById('q_9_a_0').checked)
           		    total+=parseInt(document.getElementById('q_9_a_0').value);
           		else if(document.getElementById('q_9_a_1').checked)
           		    total+=parseInt(document.getElementById('q_9_a_1').value);
                else if(document.getElementById('q_9_a_2').checked)
           		    total+=parseInt(document.getElementById('q_9_a_2').value);
           		
           		   
           		//alert (total);
           		
           		 var result;
           		if(total>=100&& total < 200)
           		{
           			result="No, You're Not In Love.";
           			result+="\n";
           			result+="Sorry, but this isn't true love. If you're not sure if he's";
           			result+="\n";
           			result+="worth sacrificing certain things, like moving cross";
           			result+="\n";
           			result+="country, or a dream job, then you're not sure you really";
           			result+="\n";
           			result+="love him. And if you have to take a quiz to make sure, then";
           			result+="\n";
           			result+="that's not a good sign either. If you're not friendly with";
           			result+="\n";
           			result+="his family (or at least making an effort) and if you're not";
           			result+="\n";
           			result+="on good terms with your friends, this could be a sign of an";
           			result+="\n";
           			result+="unhealthy relationship. Spending too much time together";
           			result+="\n";
           			result+="isn't true love, it's an infatuation";
           		}
           		else if(total>=200 && total <=360)
           		{
           			result="Yes, You are in love!!";
           			result+="\n";
           			result+="Yes, you've found a balance with him, you're comfortable";
           			result+="\n";
           			result+="around him, and you can be yourself around him. That's";
           			result+="\n";
           			result+="really important and is a pretty good indicator that you're";
           		    result+="\n";
           			result+="in love! Giving up really important things for him is";
           		    result+="\n";
           			result+="important, too. Hopefully you won't be in that situation,";
           			result+="\n";
           			result+="but if you're not sure if he's worth sacrificing certain";
           			result+="\n";
           			result+="things, then you're not sure you really love him. Giving up";
           			result+="\n";
           			result+="your friends, though, is definitely NOT one of those";
           			result+="\n";
           			result+="things, so your ability to maintain your relate.";
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
