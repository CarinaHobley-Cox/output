$(document).on("pagecreate","#pageone",function(){
    
  $('#submitButton').on("click", function(){
    submitText();
  });      
    
   // shake listener to call submitText 

    $('#shakeDevice').on("shake",function(){submitText();
                                           
                                           });

});            


function submitText() {
	
    var rand = random();
    
    
    //print hello if true
    
    
    // print bye if false
    
    
    if(rand == true) {
        
      //  alert("Hello");
         $("#resultText").text("True");
        navigator.notification.beep(1);
        //vibrate for 200 milliseconds
navigator.vibrate(200,500);
    }
    
    else {
        
       // alert("Bye");
         $("#resultText").text("False");
        navigator.notification.beep(2);
        //vibrate for 200 milliseconds
navigator.vibrate(200,300);
    }
    
    
    //$("#resultText").text("newText");
    
}

 function random() {
	return !Math.round(Math.random());
}

function storeValue(key, value) {
    
	//add some code to store the key-value pair in persistant storage 
}

