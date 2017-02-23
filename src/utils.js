var windowWidth = () => document.documentElement.clientWidth;
var windowHeight = () => document.documentElement.clientHeight;

var elemOffset = elem => {
    var rect = elem.getBoundingClientRect();
    var docElem = document.documentElement;
    var win = window;
    return {
        top: rect.top + win.pageYOffset - docElem.clientTop,
        left: rect.left + win.pageXOffset - docElem.clientLeft
    };
};

var once = (elem, type, handler) => {
    var fn = e => {
        e.target.removeEventListener(type, fn);
        handler();
    };
    elem.addEventListener(type, fn);
};

var maxSrcSetWidth = srcset => {
    var srcsetValues = srcset.split(',')
    var srcsetWidths = srcsetValues.map( (value) => {
        var value = value.trim();
        var width = value.split(' ')[1].trim();

        if(width.charAt(width.length-1) === 'w' ){
            return width.replace('w','');
        }

        return 0;
    });

    return Math.max.apply(Math, srcsetWidths);
}

export { windowWidth, windowHeight, elemOffset, once, maxSrcSetWidth };
