function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

var icon = document.getElementById("icon");

icon.onclick = function (){
	document.body.classList.toggle("dark");
}

// //added new
// function toggleDarkMode() {
// 	document.body.classList.toggle("dark-mode");
// 	// Save the mode in localStorage
// 	if (document.body.classList.contains("dark-mode")) {
// 	  localStorage.setItem('theme', 'dark');
// 	} else {
// 	  localStorage.setItem('theme', 'light');
// 	}
//   }
  
//   // Set the theme on page load
//   window.onload = function() {
// 	const theme = localStorage.getItem('theme');
// 	if (theme === 'dark') {
// 	  document.body.classList.add('dark-mode');
// 	  document.getElementById('darkModeToggle').checked = true;
// 	}
//   };
  