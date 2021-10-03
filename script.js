// Script

var i = 0, j =0;
var txt = ['Be Smart', 'Be Nature'];
var speed = 300;
var backward = false;
var typewriter = document.getElementById('typewriting')


function typeWriting() {
    if (i == txt[j].length || i == -1) {
        backward = !backward;
      if (i == -1) {
          j = (j + 1) % txt.length;
      }
  }
  
    if (!backward) {
      typewriter.innerHTML += txt[j].charAt(i);
      i++;
    }
  else {
      typewriter.innerHTML = typewriter.innerHTML.substring(0, typewriter.innerHTML.length - 1);
      i--;
  }
  
  setTimeout(typeWriting, speed);
}