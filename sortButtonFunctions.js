/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function function1() {
  alert("You Clicked on Anchor Tag 1");
}

function function2() {
  alert("You Clicked on Anchor Tag 2");
}

function function3() {
  alert("You Clicked on Anchor Tag 3");
}

function function4() {
  alert("You Clicked on Anchor Tag 4");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
