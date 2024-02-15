new Vue({
  el: "#app",
  data: {
    currentTime: "",
    emailText: "Click the button to toggle email.",
    shown: false,
  },
  mounted() {
    setInterval(() => {
      this.currentTime = "Current time: " + new Date();
    }, 500);
  },
  methods: {
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
    changeBgColor() {
      document.body.style.backgroundColor = getRandomColor();
    },
  },
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
