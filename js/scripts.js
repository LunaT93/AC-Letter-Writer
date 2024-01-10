window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
      // in this section we get the value for each form input
      const animalRecipient = document.getElementById("animalRecipient").value;
      const letterBody = document.getElementById("letterBody").value;
      const fromName= document.getElementById("fromName").value;
 
      
      // then we set the story variables to the values we got from the form
      document.querySelector("span#animal").innerText = animalRecipient;
      document.querySelector("span#body").innerText = letterBody;
      document.querySelector("span#from").innerText = fromName;
      
      document.querySelector("div#story").removeAttribute("class");
  
      event.preventDefault();
    };
  };