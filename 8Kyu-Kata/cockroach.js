// 8 kyu Beginner Series #4 Cockroach
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
function cockroachSpeed(s) {
    let cmPerSecond = Math.floor((s * (100000/3600)))
    return cmPerSecond
  }
// Other solution:
const cockroachSpeed = s => Math.floor(s / 0.036);