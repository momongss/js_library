function getFullWordClicked() {
  let range;
  let textNode;
  let offset;

  let isPressed = false;
  let selectedText = "";

  let begin;
  let end;

  window.addEventListener("mousedown", (e) => {
    isPressed = true;

    begin = Infinity;
    end = 0;
  });

  window.addEventListener("mousemove", (e) => {
    if (isPressed) {
      if (document.caretPositionFromPoint) {
        range = document.caretPositionFromPoint(e.clientX, e.clientY);
        textNode = range.offsetNode;
        offset = range.offset;
      } else if (document.caretRangeFromPoint) {
        range = document.caretRangeFromPoint(e.clientX, e.clientY);
        textNode = range.startContainer;
        offset = range.startOffset;
      }

      findFullWord(textNode, offset);
      function findFullWord(textNode, offset) {
        let text = textNode.textContent;
        let subBegin = offset;
        let subEnd = offset;
        while (subBegin >= 0 && text[subBegin] !== " ") {
          subBegin--;
        }
        while (subEnd < text.length && text[subEnd] !== " ") {
          subEnd++;
        }
        begin = Math.min(begin, subBegin);
        end = Math.max(end, subEnd);

        text = text.substring(begin, end);
        if (selectedText !== text) {
          selectedText = text;
          console.log(selectedText);
        }
      }
    }
  });

  window.addEventListener("mouseup", (e) => {
    isPressed = false;
  });
}

getFullWordClicked();
