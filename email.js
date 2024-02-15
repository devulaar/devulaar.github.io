var shown = false;
function showhideEmail() {
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
    document.getElementById("email-id").innerHTML = myemail;
    shown = true;
  }
}
