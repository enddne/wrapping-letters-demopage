export function copy(ref: { current: any }) {
  var range = document.createRange(),
    selection = window.getSelection(),
    contentHolder = ref.current;

  if (selection) {
    selection.removeAllRanges();

    range.selectNodeContents(contentHolder);

    selection.addRange(range);

    document.execCommand("copy");

    selection.removeAllRanges();
  }
}
