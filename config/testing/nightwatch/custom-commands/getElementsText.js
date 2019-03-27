const util = require('util');
const events = require('events');

function getElementsText() {
  events.EventEmitter.call(this);
}

util.inherits(getElementsText, events.EventEmitter);

getElementsText.prototype.command = function (cssSelector, cb) {
  const self = this;
  let elementsText = [];

  this.client.api.elements('css selector', cssSelector, (res) => {
    elementsText = res.value;

    let count = 0;
    elementsText.forEach(async (el, i) => {
      self.client.api.elementIdText(el.ELEMENT, ({ value }) => {
        elementsText[i] = value;
        count += 1;
        if (count === elementsText.length) {
          cb(elementsText);
          self.emit('complete');
        }
      });
    });
  });


  return this;
};

module.exports = getElementsText;
