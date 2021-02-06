var divs = document.querySelectorAll("div");
divs.forEach(function (div) {
  if (div.className !== "two") {
    div.addEventListener("click", logEvent);
  }
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}
