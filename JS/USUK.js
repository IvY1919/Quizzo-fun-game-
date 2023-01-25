function buttonClick()
           	{ var GB=0;var US=0;
           		
           		if(document.getElementById('q_0_a_0').checked)
           		    US++;
           		else if(document.getElementById('q_0_a_1').checked)
           		    GB++;
                
           		
           		if(document.getElementById('q_1_a_0').checked)
           		   GB++;
           		else if(document.getElementById('q_1_a_1').checked)
           		    US++;
               
           		
           		if(document.getElementById('q_2_a_0').checked)
           		   US++;
           		else if(document.getElementById('q_2_a_1').checked)
           		   GB++;
               
           		    
            	if(document.getElementById('q_3_a_0').checked)
           		  GB++
           		else if(document.getElementById('q_3_a_1').checked)
           		US++;
           		    
           		    if(document.getElementById('q_4_a_0').checked)
           		  US++;
           		else if(document.getElementById('q_4_a_1').checked)
           		  GB++;
           		  
           	          if(document.getElementById('q_5_a_0').checked)
           		  US++;
           		else if(document.getElementById('q_5_a_1').checked)
           		   GB++;
           		    
                       if(document.getElementById('q_6_a_0').checked)
           		  GB++;
           		else if(document.getElementById('q_6_a_1').checked)
           		   US++;
           		    
           		    if(document.getElementById('q_7_a_0').checked)
           		  GB++;
           		else if(document.getElementById('q_7_a_1').checked)
           		 US++;
                
           		    
           		     if(document.getElementById('q_8_a_0').checked)
           		    US++;
           		else if(document.getElementById('q_8_a_1').checked)
           		 GB++;
           		    
           		    if(document.getElementById('q_9_a_0').checked)
           		    US++;
           		else if(document.getElementById('q_9_a_1').checked)
           		    GB++;
           		    
           		       if(document.getElementById('q_10_a_0').checked)
           		  GB++
           		else if(document.getElementById('q_10_a_1').checked)
           		     US++;
           		    
           		       if(document.getElementById('q_11_a_0').checked)
           		    US++;
           		else if(document.getElementById('q_11_a_1').checked)
           		    GB++;
           		   
           		   var result;
           			if(US>GB)
           			{
           				result="Congratulations !!!! You are a British..... You answers say that you are a American........";
           			}
           	
           		else if(US<GB)
           			{
           				result="Congratulations !!!! You are a British..... You answers say that you are a British........";
           			}
           			else		
           			{
           				result="Oopsss....HYBRID ???";
           				result+="\n";
                        result+="You are half-British , half-American .......";
                        result+="\n You inherits the traits of the two countries ..... ";
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