$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
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
    }
    
    else {
        
       // alert("Bye");
         $("#resultText").text("False");
        navigator.notification.beep(2);
    }
    
    
    //$("#resultText").text("newText");
    
}

 function random() {
	return !Math.round(Math.random());
}

function storeValue(key, value) {
    
	//add some code to store the key-value pair in persistant storage 
}
