function intToChar(int) {
  const code = "a".charCodeAt(0);
  console.log(code);

  return String.fromCharCode(code + int);
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  var snare = new Audio("assets/sounds/snare.mp3");
        snare.play();

  activeButton.classList.add("clicked");
  setTimeout(function () {
    activeButton.classList.remove("clicked");
  }, 700);
}
var arr = [];

function detectKey(currentKey)
{
    arr.push(currentKey);
}

var totalButton = document.querySelectorAll(".drum");
for (var i = 0; i < totalButton.length; i++) {
  totalButton[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    detectKey(buttonInnerHTML);
  });
}


var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  ranNums = [],
  i = nums.length,
  j = 0;

while (i--) {
  j = Math.floor(Math.random() * (i + 1));
  ranNums.push(nums[j]);
  nums.splice(j, 1);
}


var count = 0;

const timer = (ms) => new Promise((res) => setTimeout(res, ms));
async function load() {
  for (let k = 0; k < 16; k++) {
    const array = [];
    for (let l = 0; l < k + 1; l++) {
      var newChar = intToChar(ranNums[l] - 1);
      array.push(newChar);
      var el = document.getElementsByClassName(newChar)[0];
      var buttonInnerHTML = el.innerHTML;
      buttonAnimation(buttonInnerHTML);
      await timer(700);
    }

    await timer(5000);
    for (let l = 0; l < k + 1; l++) {
      await timer(700);
    }
    array.sort();
    arr.sort();
    var str1 = JSON.stringify(arr);
    var str2 = JSON.stringify(array);
    if (str1 === str2 ) {
      count++;
      arr = [];
    } else {
      alert("game over your score is: " + count);
      break;
    }
  }
}
load();

document.addEventListener("keydown", function (event) {
  buttonAnimation(event.key);

});
