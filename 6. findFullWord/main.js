window.addEventListener("click", (e) => {
  findFullWord(e.clientX, e.clientY);
});

function findFullWord(x, y) {
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(x, y);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(x, y);
    textNode = range.startContainer;
    offset = range.startOffset;
  }

  let text = textNode.textContent;
  let begin = offset;
  let end = offset;
  while (begin >= 0 && text[begin] !== " ") {
    begin--;
  }
  while (end < text.length && text[end] !== " ") {
    end++;
  }

  console.log(text.substring(begin, end));
}
