window.addEventListener("load", (event)=>{



   var modal = document.getElementById("myModal");
   var images = document.getElementsByClassName("responsive");
   // Get the image and insert it inside the modal - use its "alt" text as a caption
   var img = document.getElementsByClassName("responsive");
   var modalImg = document.getElementById("img1");
   var captionText = document.getElementById("hide");
   
   
   for (var i=0; i< images.length; i++){
     var img = images[i];
     img.onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
       captionText.innerHTML = this.alt;
     }
   
   }
   
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];
   
   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     modal.style.display = "none";
   } 
   
   })