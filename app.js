var libButton = document.getElementById('lib-button');
var libIt = function() {
    var storyDiv = document.getElementById("story");
    storyDiv.innerHTML = "??Your story here";
};
libButton.addEventListener('click', libIt);