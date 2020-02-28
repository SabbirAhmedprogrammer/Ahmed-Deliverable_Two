
  function myFunction() {
    let destination = "";    
    let vacationType = prompt ("What kind of trip would you like to go on, Musical, Tropical, or Adventurous?");
      if (vacationType === "musical" || vacationType === "Musical"){
        destination = ("New Orleans");  
      }
      else if (vacationType === "tropical" || vacationType === "Tropical"){
        destination = ("a Beach vacation in Mexico");    
      }
      else if (vacationType==="adventurous" || vacationType === "Adventurous") {
        destination = ("Whitewater Rafting the Grand Canyon");       
      }   
      else {
        destination = ""; 
      }

    let travelSuggestion= "";
    let groupSize= prompt ("How many people are in your group?");
        
    if (groupSize == null || groupSize== ""){
       travelSuggestion = "Please Input All Fields";       
    }
    else if (groupSize === "1" || groupSize === "2"){
        travelSuggestion= ("first class");
      }
      else if (2< groupSize <6){
        travelSuggestion= ("helicopter");
      }
      if (groupSize >= 6) {
        travelSuggestion= ("charter flight");  
      }


    let result = ("Since you are a group of "+groupSize+" going on a "
    +vacationType+" vacation, you should take a "+travelSuggestion+
    " to "+destination+".");

    if (vacationType=== null || vacationType === "" || destination===null || destination === "" || 
    groupSize === null || groupSize === "" || travelSuggestion === null || travelSuggestion === "") {
      console.log ("please input all fields correctly for your travel recommendation!");
    } 
    
    else{
      console.log (result);
       
    }
  }
    
