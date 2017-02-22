var getFocusableElements = function(element) {
    var focusElemString = "a[href],button:not([disabled]),area[href],input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),iframe,object,embed,*:not(.is-draggabe)[tabindex],*[contenteditable]";
    var tempElements = element.querySelectorAll(focusElemString);
    tempElements = Array.prototype.slice.call(tempElements);
    var focusableElements = [];

    for (var i = 0; i < tempElements.length; i++) {
      if(tempElements[i].offsetHeight !== 0) focusableElements.push(tempElements[i])
    };
    
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
