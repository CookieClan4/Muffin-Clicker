if (window.localStorage.muffins) {
  var muffins = parseFloat(window.localStorage.muffins);
} else {
  var muffins = 0;
}
if (window.localStorage.clicks) {
  var clicks = parseInt(window.localStorage.clicks);
} else {
  var clicks = 0;
}
if (window.localStorage.clickOne) {
  var clickOne = parseInt(window.localStorage.clickOne);
} else {
  var clickOne = 0;
}
if (window.localStorage.clickTwo) {
  var clickTwo = parseInt(window.localStorage.clickTwo);
} else {
  var clickTwo = 0;
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
if (window.localStorage.boosterOne) {
  var boosterOne = parseInt(window.localStorage.boosterOne);
  document.getElementById("upgradeOne").innerText = "BOUGHT";
} else {
  var boosterOne = 0;
}
if (window.localStorage.boosterTwo) {
  var boosterTwo = parseInt(window.localStorage.boosterTwo);
  document.getElementById("upgradeTwo").innerText = "BOUGHT";
} else {
  var boosterTwo = 0;
}
if (window.localStorage.boosterThree) {
  var boosterThree = parseInt(window.localStorage.boosterThree);
  document.getElementById("upgradeThree").innerText = "BOUGHT";
} else {
  var boosterThree = 0;
}


function handleClick() {
  muffins = muffins + (clickOne + (clickTwo * 6)) + (1 + (0.1 * boosterOne));
  updateDisplay();
  clicks = clicks + 1;
  window.localStorage.setItem("muffins", muffins);
}

function passive() {
  muffins = muffins + ((passiveOne + (passiveTwo * 3)) / 10 * (1 + (0.1 * boosterTwo)));
  updateDisplay();
  window.localStorage.setItem("muffins", muffins);
}
setInterval(passive, 100)

function buyClickOne() {
  if (muffins >= Math.floor((1.2 ** clickOne) * 15 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** clickOne) * 15 * (1 - (0.1 * boosterThree)));
    clickOne = clickOne + 1;
    updateDisplay();
    window.localStorage.setItem("clickOne", clickOne);
    window.localStorage.setItem("muffins", muffins);
  }
}

function buyClickTwo() {
  if (muffins >= Math.floor((1.2 ** clickTwo) * 500 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** clickTwo) * 500 * (1 - (0.1 * boosterThree)));
    clickTwo = clickTwo + 1;
    updateDisplay();
    window.localStorage.setItem("clickTwo", clickTwo);
    window.localStorage.setItem("muffins", muffins);
  }
}

function buyPassiveOne() {
  if (muffins >= Math.floor((1.2 ** passiveOne) * 30 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** passiveOne) * 30 * (1 - (0.1 * boosterThree)));
    passiveOne = passiveOne + 1;
    updateDisplay();
    window.localStorage.setItem("passiveOne", passiveOne);
    window.localStorage.setItem("muffins", muffins);
  }
}

function buyPassiveTwo() {
  if (muffins >= Math.floor((1.2 ** passiveTwo) * 350 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** passiveTwo) * 350 * (1 - (0.1 * boosterThree)));
    passiveTwo = passiveTwo + 1;
    updateDisplay();
    window.localStorage.setItem("passiveTwo", passiveTwo);
    window.localStorage.setItem("muffins", muffins);
  }
}

function buyUpgradeOne() {
  if (muffins >= 1000) {
    if (boosterOne === 0) {
    muffins = muffins - 1000;
    boosterOne = 1;
    document.getElementById("upgradeOne").innerText = "BOUGHT";
    updateDisplay();
    window.localStorage.setItem("boosterOne", boosterOne);
    window.localStorage.setItem("muffins", muffins);
    }
  }
}

function buyUpgradeTwo() {
  if (muffins >= 1250) {
    if (boosterTwo === 0) {
    muffins = muffins - 1250;
    boosterTwo = 1;
    document.getElementById("upgradeTwo").innerText = "BOUGHT";
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
    document.getElementById("upgradeThree").innerText = "BOUGHT";
    updateDisplay();
    window.localStorage.setItem("boosterThree", boosterThree);
    window.localStorage.setItem("muffins", muffins);
    }
  }
}

function updateDisplay() {
  document.getElementById("muffinCount").innerText = "Muffins: " + Math.floor(muffins);
  document.getElementById("passiveCount").innerText = "+" + ((passiveOne + (passiveTwo * 3)) * (1 + (0.1 * boosterTwo))).toFixed(1) + " Muffins Per Second";
  document.getElementById("muffinButton").innerText = "Bake " + ((1 + clickOne + (clickTwo * 6)) * (1 + (0.1 * boosterOne))).toFixed(1) + " Muffins!";
  document.getElementById("clickUpgradeOne").innerText = Math.floor((1.2 ** clickOne) * 15 * (1 - (0.1 * boosterThree))) + " Muffins";
  document.getElementById("clickUpgradeTwo").innerText = Math.floor((1.2 ** clickTwo) * 500 * (1 - (0.1 * boosterThree))) + " Muffins";
  document.getElementById("passiveUpgradeOne").innerText = Math.floor((1.2 ** passiveOne) * 30 * (1 - (0.1 * boosterThree))) + " Muffins";
  document.getElementById("passiveUpgradeTwo").innerText =  Math.floor((1.2 ** passiveTwo) * 350 * (1 - (0.1 * boosterThree))) + " Muffins";
}

function reset() {
  localStorage.removeItem("muffins");
  muffins = 0;
  localStorage.removeItem("clickOne");
  clickOne = 0;
  localStorage.removeItem("clickTwo");
  click = 0;
  localStorage.removeItem("passiveOne");
  passiveOne = 0;
  localStorage.removeItem("passiveTwo");
  passiveTwo = 0;
  localStorage.removeItem("boosterOne");
  boosterOne = 0;
  localStorage.removeItem("boosterTwo");
  boosterTwo = 0;
  localStorage.removeItem("boosterThree");
  boosterThree = 0;
  location.reload();
}

document.getElementById("muffinButton").addEventListener("click", handleClick);
document.getElementById("clickUpgradeOne").addEventListener("click", buyClickOne);
document.getElementById("clickUpgradeTwo").addEventListener("click", buyClickTwo);
document.getElementById("passiveUpgradeOne").addEventListener("click", buyPassiveOne);
document.getElementById("passiveUpgradeTwo").addEventListener("click", buyPassiveTwo);
document.getElementById("upgradeOne").addEventListener("click", buyUpgradeOne);
document.getElementById("upgradeTwo").addEventListener("click", buyUpgradeTwo);
document.getElementById("upgradeThree").addEventListener("click", buyUpgradeThree);
document.getElementById("reset").addEventListener("click", reset);


