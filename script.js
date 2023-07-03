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
  if (e.key === "=" || e.key === "Enter") {
    calculate();
  } else if (
    (e.key >= "0" && e.key <= "9") ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "%"
  ) {
    buttonAnimation(e.key);
    display(e.key);
  } else if (e.key === "Backspace") {
    clearLastChar();
  } else if (e.key === "Escape" || e.key === "C" || e.key === "c") {
    clearScreen();
  }
});

const buttonAnimation = (currentKey) => {
  const activeKey = document.getElementById(currentKey);

  activeKey.classList.add("pressed");

  setTimeout(() => {
    activeKey.classList.remove("pressed");
  }, 100);
};
