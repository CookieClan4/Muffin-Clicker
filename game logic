var muffins = 0;
var clickOne = 0;
var clickTwo = 0;
var passiveOne = 0;
var passiveTwo = 0;
var boosterOne = 0;
var boosterTwo = 0;
var boosterThree = 0;

function handleClick() {
  muffins = muffins + (clickOne + (clickTwo * 6)) + (1 + (0.1 * boosterOne));
  updateDisplay();
}

function passive() {
  muffins = muffins + ((passiveOne + (passiveTwo * 3)) / 10 * (1 + (0.1 * boosterTwo)));
  updateDisplay();
}
setInterval(passive, 100)

function buyClickOne() {
  if (muffins >= Math.floor((1.2 ** clickOne) * 15 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** clickOne) * 15 * (1 - (0.1 * boosterThree)));
    clickOne = clickOne + 1;
    updateDisplay();
  }
}

function buyClickTwo() {
  if (muffins >= Math.floor((1.2 ** clickTwo) * 500 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** clickTwo) * 500 * (1 - (0.1 * boosterThree)));
    clickTwo = clickTwo + 1;
    updateDisplay();
  }
}

function buyPassiveOne() {
  if (muffins >= Math.floor((1.2 ** passiveOne) * 30 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** passiveOne) * 30 * (1 - (0.1 * boosterThree)));
    passiveOne = passiveOne + 1;
    updateDisplay();
  }
}

function buyPassiveTwo() {
  if (muffins >= Math.floor((1.2 ** passiveTwo) * 350 * (1 - (0.1 * boosterThree)))) {
    muffins = muffins - Math.floor((1.2 ** passiveTwo) * 350 * (1 - (0.1 * boosterThree)));
    passiveTwo = passiveTwo + 1;
    updateDisplay();
  }
}

function buyUpgradeOne() {
  if (muffins >= 1000) {
    if (boosterOne === 0) {
    muffins = muffins - 1000;
    boosterOne = 1;
    document.getElementById("upgradeOne").innerText = "BOUGHT";
    updateDisplay();
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


document.getElementById("muffinButton").addEventListener("click", handleClick);
document.getElementById("clickUpgradeOne").addEventListener("click", buyClickOne);
document.getElementById("clickUpgradeTwo").addEventListener("click", buyClickTwo);
document.getElementById("passiveUpgradeOne").addEventListener("click", buyPassiveOne);
document.getElementById("passiveUpgradeTwo").addEventListener("click", buyPassiveTwo);
document.getElementById("upgradeOne").addEventListener("click", buyUpgradeOne);
document.getElementById("upgradeTwo").addEventListener("click", buyUpgradeTwo);
document.getElementById("upgradeThree").addEventListener("click", buyUpgradeThree);


