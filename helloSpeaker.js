(function (window) {
  // 'helloSpeaker' object
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose to global scope
  window.helloSpeaker = helloSpeaker;
})(window);
