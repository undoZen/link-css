var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;

    var elem = document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('type', 'text/css');
    elem.setAttribute('href', css);

    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};
