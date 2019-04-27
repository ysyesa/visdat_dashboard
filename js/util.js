$(document).ready(function() {
    elements = $("text");
    for (i = elements.length; i >= elements.length - 4; i--) {
        elements[i - 1].remove();
    }
});