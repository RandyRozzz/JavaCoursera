(function (window) {
  // 'byeSpeaker' object
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose to global scope
  window.byeSpeaker = byeSpeaker;
})(window);
