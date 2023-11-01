const worker = new Worker("worker.js");

function calculateSum() {
  const number = parseInt(document.getElementById("number").value);
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  displaySumResult(sum);
}

function calculateSumWorker() {
  const number = parseInt(document.getElementById("number").value);
  worker.postMessage(number);
}

worker.onmessage = function (message) {
  console.log("main-thread.onmessage", message);
  const sum = message.data;
  displaySumResult(sum);
};

function displaySumResult(sum){
  alert(`Result: ${sum}`);
  document.getElementById("sum").innerText = sum;
}

function changeBackgroundColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = "rgb(" + red + ", " + green + ", " + blue + ")";

  document.body.style.backgroundColor = color;
}
