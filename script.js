'use strict';


const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector,
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize
    this.myFunc = function () {
        let element;
        if (this.selector[0] === '.') {

            element = document.createElement('div');
            element.className = this.selector.slice(1);

        } else if (this.selector[0] === '#') {

            element = document.createElement('p');
            element.id = this.selector.slice(1);

        }
        element.style.cssText = `height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;`

        return element;
    };
};

let newDiv = new DomElement('.block', 100, 150, 'red', 15);
let newParagraph = new DomElement('#paragraph', 200, 150, 'green', 10);

document.body.appendChild(newDiv.myFunc());
document.body.appendChild(newParagraph.myFunc());