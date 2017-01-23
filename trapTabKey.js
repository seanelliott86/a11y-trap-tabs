var getFocusableElements = function(element) {
    var focusElemString = "a[href],button:not([disabled]),area[href],input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),iframe,object,embed,*:not(.is-draggabe)[tabindex],*[contenteditable]";
    var focusableElements = element.querySelectorAll(focusElemString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    var object = {
      "all": focusableElements,
      "first": focusableElements[0],
      "last": focusableElements[focusableElements.length-1]
    }

    return object;
}

var trapTabKey = function(container) {
    var activeElm = document.activeElement;
    var focusObj = getFocusableElements(container);

    if (event.keyCode !== 9) return false

    if (event.shiftKey && activeElm === focusObj.first) {
        focusObj.last.focus();
        event.preventDefault();
    } else if (!event.shiftKey && activeElm === focusObj.last) {
        focusObj.first.focus();
        event.preventDefault();
    }
}
