var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", function(){
		document.querySelector("body").classList.toggle("active");
	})

	function SignUp() {
		document.getElementById("myForm").style.display = "block";
	  }
	  
	  function closeForm() {
		document.getElementById("myForm").style.display = "none";
	  }