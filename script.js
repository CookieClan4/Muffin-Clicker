if (window.localStorage.muffins) {
  var muffins = parseFloat(window.localStorage.muffins) + 100000;
} else {
  var muffins = 0;
}
if (window.localStorage.clicks) {
  var clicks = parseInt(window.localStorage.clicks);
} else {
  var clicks = 0;
}
if (window.localStorage.passiveOne) {
  var passiveOne = parseInt(window.localStorage.passiveOne);
} else {
  var passiveOne = 0;
}
if (window.localStorage.passiveTwo) {
  var passiveTwo = parseInt(window.localStorage.passiveTwo);
} else {
  var passiveTwo = 0;
}
if (window.localStorage.passiveThree) {
  var passiveThree = parseInt(window.localStorage.passiveThree);
} else {
  var passiveThree = 0;
}
if (window.localStorage.passiveFour) {
  var passiveFour = parseInt(window.localStorage.passiveFour);
} else {
  var passiveFour = 0;
}
if (window.localStorage.boosterOne) {
  var boosterOne = parseInt(window.localStorage.boosterOne);
  document.getElementById("buyUpgradeOne").innerText = "BOUGHT";
  document.getElementById("grandmaText").innerText = "Grandma: +0.2 Muffins Per Second";
} else {
  var boosterOne = 0;
}
if (window.localStorage.boosterTwo) {
  var boosterTwo = parseInt(window.localStorage.boosterTwo);
  document.getElementById("buyUpgradeTwo").innerText = "BOUGHT";
} else {
  var boosterTwo = 0;
}
if (window.localStorage.boosterThree) {
  var boosterThree = parseInt(window.localStorage.boosterThree);
  document.getElementById("buyUpgradeThree").innerText = "BOUGHT";
} else {
  var boosterThree = 0;
}
if (window.localStorage.boosterFour) {
  var boosterFour = parseInt(window.localStorage.boosterFour);
  document.getElementById("buyUpgradeFour").innerText = "BOUGHT";
} else {
  var boosterFour = 0;
}
if (window.localStorage.boosterFive) {
  var boosterFive = parseInt(window.localStorage.boosterFive);
  document.getElementById("buyUpgradeFive").innerText = "BOUGHT";
  document.getElementById("bakeryText").innerText = "Bakery: +2 Muffins Per Second";
} else {
  var boosterFive = 0;
}
if (window.localStorage.version) {
  var version = 1.1;
  window.localStorage.setItem("version", version)
} else {
  var version = 1;
  window.localStorage.setItem("version", version);
  reset();
  document.getElementById("update").innerText = "Sorry! The new update resets everything. If you played before then you lost all progress."
}

// set variables above

function handleClick() {
  muffins = muffins + (1 + (boosterFour * 0.01 * ((passiveOne * 0.1 * (1 + boosterOne) + passiveTwo + passiveThree * 4 + passiveFour * 10) * (1 + (0.1 * boosterTwo)))));
  updateDisplay();
  clicks = clicks + 1;
  window.localStorage.setItem("muffins", muffins);
}

function passive() {
  muffins = muffins + ((passiveOne * 0.1 * (1 + boosterOne) + passiveTwo + passiveThree * 4 + passiveFour * 10) / 20 * (1 + (0.1 * boosterTwo)));
  updateDisplay();
  window.localStorage.setItem("muffins", muffins);
}
setInterval(passive, 50)

// basic functions above

function buyPassiveOne() {
  if (muffins >= Math.floor((1.2 ** passiveOne) * 15 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** passiveOne) * 15 * (1 - (0.1 * boosterThree)));
    passiveOne = passiveOne + 1;
    updateDisplay();
    window.localStorage.setItem("passiveOne", passiveOne);
    window.localStorage.setItem("muffins", muffins);
  }
}

function buyPassiveTwo() {
  if (muffins >= Math.floor((1.2 ** passiveTwo) * 100 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** passiveTwo) * 100 * (1 - (0.1 * boosterThree)));
    passiveTwo = passiveTwo + 1;
    updateDisplay();
    window.localStorage.setItem("passiveTwo", passiveTwo);
    window.localStorage.setItem("muffins", muffins);
  }
}

function buyPassiveThree() {
  if (muffins >= Math.floor((1.2 ** passiveThree) * 500 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** passiveThree) * 500 * (1 - (0.1 * boosterThree)));
    passiveThree = passiveThree + 1;
    updateDisplay();
    window.localStorage.setItem("passiveThree", passiveThree);
    window.localStorage.setItem("muffins", muffins);
  }
}

function buyPassiveFour() {
  if (muffins >= Math.floor((1.2 ** passiveFour) * 5000 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** passiveFour) * 5000 * (1 - (0.1 * boosterFour)));
    passiveFour = passiveFour + 1;
    updateDisplay();
    window.localStorage.setItem("passiveFour", passiveFour);
    window.localStorage.setItem("muffins", muffins);
  }
}

function buyUpgradeOne() {
  if (muffins >= 250) {
    if (boosterOne === 0) {
    muffins = muffins - 250;
    boosterOne = 1;
    document.getElementById("buyUpgradeOne").innerText = "BOUGHT";
    updateDisplay();
    window.localStorage.setItem("boosterOne", boosterOne);
    window.localStorage.setItem("muffins", muffins);
    document.getElementById("grandmaText").innerText = "Grandma: +0.2 Muffins Per Second";
    }
  }
}

function buyUpgradeTwo() {
  if (muffins >= 1500) {
    if (boosterTwo === 0) {
    muffins = muffins - 1500;
    boosterTwo = 1;
    document.getElementById("buyUpgradeTwo").innerText = "BOUGHT";
    updateDisplay();
    window.localStorage.setItem("boosterTwo", boosterTwo);
    window.localStorage.setItem("muffins", muffins);
    }
  }
}

function buyUpgradeThree() {
  if (muffins >= 2000) {
    if (boosterThree === 0) {
    muffins = muffins - 2000;
    boosterThree = 1;
    document.getElementById("buyUpgradeThree").innerText = "BOUGHT";
    updateDisplay();
    window.localStorage.setItem("boosterThree", boosterThree);
    window.localStorage.setItem("muffins", muffins);
    }
  }
}

function buyUpgradeFour() {
  if (muffins >= 5000) {
    if (boosterFour === 0) {
    muffins = muffins - 5000;
    boosterFour = 1;
    document.getElementById("buyUpgradeFour").innerText = "BOUGHT";
    updateDisplay();
    window.localStorage.setItem("boosterFour", boosterFour);
    window.localStorage.setItem("muffins", muffins);
    }
  }
}

function buyUpgradeFive() {
  if (muffins >= 5000) {
    if (boosterFive === 0) {
    muffins = muffins - 5000;
    boosterFive = 1;
    document.getElementById("buyUpgradeFive").innerText = "BOUGHT";
    document.getElementById("bakeryText").innerText = "Bakery: +2 Muffins Per Second";
    updateDisplay();
    window.localStorage.setItem("boosterFive", boosterFive);
    window.localStorage.setItem("muffins", muffins);
    }
  }
}

// buyin stuff

function updateDisplay() {
  document.getElementById("muffinCount").innerText = "Muffins: " + Math.floor(muffins);
  document.getElementById("passiveCount").innerText = "+" + ((passiveOne * 0.1 * (1 + boosterOne) + passiveTwo + passiveThree * 4 + passiveFour * 10) * (1 + (0.1 * boosterTwo))).toFixed(1) + " Muffins Per Second" + " (+"  + boosterTwo * 10 + "%)";
  document.getElementById("muffinButton").innerText = "Bake " + (1 + (boosterFour * 0.01 * ((passiveOne * 0.1 * (1 + boosterOne) + passiveTwo + passiveThree * 4 + passiveFour * 10) * (1 + (0.1 * boosterTwo))))).toFixed(1) + " Muffins!";
  document.getElementById("buyPassiveOne").innerText = Math.floor((1.2 ** passiveOne) * 15 * (1 - (0.1 * boosterThree))) + " Muffins";
  document.getElementById("buyPassiveTwo").innerText =  Math.floor((1.2 ** passiveTwo) * 100 * (1 - (0.1 * boosterThree))) + " Muffins";
  document.getElementById("buyPassiveThree").innerText =  Math.floor((1.2 ** passiveThree) * 1000 * (1 - (0.1 * boosterThree))) + " Muffins";
  document.getElementById("buyPassiveFour").innerText =  Math.floor((1.2 ** passiveFour) * 5000 * (1 - (0.1 * boosterThree))) + " Muffins";
}

function reset() {
  localStorage.removeItem("muffins");
  muffins = 0;
  localStorage.removeItem("clicks");
  clicks = 0;
  localStorage.removeItem("passiveOne");
  passiveOne = 0;
  localStorage.removeItem("passiveTwo");
  passiveTwo = 0;
  localStorage.removeItem("passiveThree");
  passiveThree = 0;
  localStorage.removeItem("passiveFour");
  passiveFour = 0;
  localStorage.removeItem("boosterOne");
  boosterOne = 0;
  localStorage.removeItem("boosterTwo");
  boosterTwo = 0;
  localStorage.removeItem("boosterThree");
  boosterThree = 0;
  localStorage.removeItem("boosterFour");
  boosterFour = 0;
  localStorage.removeItem("boosterFive");
  boosterFive = 0;
  location.reload();
}

document.getElementById("muffinButton").addEventListener("click", handleClick);
document.getElementById("buyPassiveOne").addEventListener("click", buyPassiveOne);
document.getElementById("buyPassiveTwo").addEventListener("click", buyPassiveTwo);
document.getElementById("buyPassiveThree").addEventListener("click", buyPassiveThree);
document.getElementById("buyPassiveFour").addEventListener("click", buyPassiveFour);
document.getElementById("buyUpgradeOne").addEventListener("click", buyUpgradeOne);
document.getElementById("buyUpgradeTwo").addEventListener("click", buyUpgradeTwo);
document.getElementById("buyUpgradeThree").addEventListener("click", buyUpgradeThree);
document.getElementById("buyUpgradeFour").addEventListener("click", buyUpgradeFour);
document.getElementById("buyUpgradeFive").addEventListener("click", buyUpgradeFive);
document.getElementById("reset").addEventListener("click", reset);


