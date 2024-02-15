new Vue({
  el: "#app",
  data: {
    currentTime: "",
    emailText: "Click the button to toggle email.",
    shown: false,
  },
  mounted() {
    // Digital Clock
    setInterval(() => {
      this.currentTime = "Current time: " + new Date();
    }, 500);
  },
  methods: {
    // Show/Hide Email
    toggleEmail() {
      if (this.shown) {
        this.emailText = "Click the button to toggle email.";
        this.shown = false;
      } else {
        this.emailText =
          "<a href='mailto:devulaar@ucmail.uc.edu'>devulaar@ucmail.uc.edu</a>";
        this.shown = true;
      }
    },
    // Additional Functionality (Change Background Color)
    changeBgColor() {
      // Change background color to a random color
      document.body.style.backgroundColor = getRandomColor();
    },
  },
});

// Function to get a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
