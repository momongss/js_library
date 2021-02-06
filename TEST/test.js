const body = document.body;
const html = document.documentElement;

window.addEventListener("click", () => {
  //   console.log(getScrollTop());
  //   console.log(window.innerHeight);
  //   console.log(window.outerHeight);
  //   console.log(document.documentElement.clientHeight);
  console.log(getDocumentHeight());
  //   console.log(`innerHeight : ${window.innerHeight} scroll : ${window.scrollY}`);
  //   console.log(window.screen.height);
  // if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
});

function getScrollTop() {
  return document.documentElement.scrollTop;
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}

function getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;

  return html.clientHeight;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    body.clientHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}
