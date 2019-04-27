function removeDemoText(id) {
    elements = $($($(id).children()[0]).children()[0]).children();
    for (i = elements.length - 2; i >= elements.length - 5; i--) {
        elements[i].remove();
    }
}