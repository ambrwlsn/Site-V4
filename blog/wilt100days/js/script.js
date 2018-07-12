var button = document.getElementById("leet");
LeetSpeaker(button).listenClick();

function LeetSpeaker(elem) {
  return {
    listenClick: function listenClick() {
      var _this = this;

      elem.addEventListener('click', function () {
        _this.speakLeet();
      });
    },
    speakLeet: function speakLeet() {
      console.log("1337 15 4W350M3");
    }
  };
}