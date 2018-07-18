import { zoom } from "../src/zoom.js";
import { srcsetFixSizes } from "../src/utils.js";

document.addEventListener("DOMContentLoaded", () => {
    var elems = document.querySelectorAll("img[data-action='zoom']");
    for (var i = 0; i < elems.length; i++) {
        zoom.setup(elems[i]);
    }

    window.addEventListener('resize', function() {
        srcsetFixSizes(elems);
    });

    window.addEventListener('load', function() {
        srcsetFixSizes(elems);
    });
});