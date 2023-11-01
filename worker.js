self.onmessage = function (message) {
    console.log('worker.onmessage', message);
    const sum = calculateSum(message.data)
    self.postMessage(sum);
}

function calculateSum(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}