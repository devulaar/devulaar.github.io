var shown = false;
function showhideEmail() {
  console.log("hi");
  if (shown) {
    document.getElementById("email").innerHTML = "Show my email";
    shown = false;
  } else {
    var myemail =
      "<a href= 'mailto:devulaar" +
      "@" +
      "ucmail. uc.edu'>devulaar" +
      "@" +
      "ucmail.uc.edu</a>";
    document.getElementById("email").innerHTML = myemail;
    shown = true;
  }
}
