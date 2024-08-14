// 8Kyu
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

const chromosomeCheck = (sperm) =>
  sperm === "XX"
    ? "Congratulations! You're going to have a daughter."
    : "Congratulations! You're going to have a son.";
