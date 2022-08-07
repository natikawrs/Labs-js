const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 }
];

function getAverage(scores) {
  let sum = scores.reduce(function (acc, item) {
    let sumweight = item.score * item.weight;
    return acc + sumweight;
  }, 0);
  return sum;
}

let everage = getAverage(scores);

console.log(everage);
