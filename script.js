$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
    
    });

// Script for the up button When the user scrolls down 20px from the top of the document, show the button
    mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// script for responsive instagram frame
 
$('iframe[src*="instagram.com"]').wrap('<div class="instagramWrapper" />');