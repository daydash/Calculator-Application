const clearScreen = () => {
  document.getElementById("result").innerText = "";
};

const clearLastChar = () => {
  document.getElementById("result").innerText = document
    .getElementById("result")
    .innerText.slice(0, -1);
};

const display = (value) => {
  document.getElementById("result").innerText += value;
};

const abs = () => {
  document.getElementById("result").innerText[0] === "-"
    ? document.getElementById("result").innerText.slice(1) // issue here
    : (document.getElementById("result").innerText =
        "-" + document.getElementById("result").innerText);

  //   console.log(document.getElementById("result").innerText);
};

const calculate = () => {
  let p = document.getElementById("result").innerText;
  if (p[0] === "*" || p[0] === "/" || p[0] === "%") {
    document.getElementById("result").innerText === "ERROR";
    setTimeout(clearScreen, 1000);
  }
  let q = eval(p);
  document.getElementById("result").innerText = q;

  if (q == "Infinity") {
    console.log(q);
    setTimeout(clearScreen, 1000);
  }
};

// Keyboard Press
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (isOperatorKey(key)) {
    buttonAnimation(key);
    display(key);
  } else if (isCalculateKey(key)) {
    calculate();
  } else if (isClearLastCharKey(key)) {
    clearLastChar();
  } else if (isClearScreenKey(key)) {
    clearScreen();
  }
});

function isOperatorKey(key) {
  return (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "%" ||
    key === "."
  );
}

function isCalculateKey(key) {
  return key === "=" || key === "Enter";
}

function isClearLastCharKey(key) {
  return key === "Backspace";
}

function isClearScreenKey(key) {
  return key === "Escape" || key === "C" || key === "c";
}

const buttonAnimation = (currentKey) => {
  const activeKey = document.getElementById(currentKey);

  activeKey.classList.add("pressed");

  setTimeout(() => {
    activeKey.classList.remove("pressed");
  }, 100);
};
