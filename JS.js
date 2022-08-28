let clickedTime = 0,
    createdTime = new Date(),
    reactionTime = 0;
const box = document.getElementById('box1'),
      timerOutput = document.getElementById("time");
function getRandomColor() {
  let letters = "0123456789ABCDEF",
      color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function makeBox() {
  let time = Math.random();
  time = time * 4000;

  setTimeout( () => {
    (Math.random() > 0.5) ?
      box.style.borderRadius = "3em" : 
      box.style.borderRadius = "0";
    
    let top = Math.random(),
        left = Math.random();
    top = top * 200;
    left = left * 200;
    
    box.style.top = `${top}px`;
    box.style.left = `${left}px`;
    box.style.backgroundColor = getRandomColor();
    box.style.display = "block";
    
    createdTime = Date.now();
  }, time);
}
function clickBox() {
  clickedTime = Date.now();
  reactionTime = Number.parseFloat((clickedTime - createdTime) / 1000).toFixed(2);
  timerOutput.innerHTML = reactionTime;
  this.style.display = "none";
  
  makeBox();
}
box.addEventListener('click', clickBox);
