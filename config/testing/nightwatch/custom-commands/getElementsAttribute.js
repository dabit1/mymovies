const util = require('util');
const events = require('events');

function getElementsAttribute() {
  events.EventEmitter.call(this);
}

util.inherits(getElementsAttribute, events.EventEmitter);

getElementsAttribute.prototype.command = function (cssSelector, attribute, cb) {
  const self = this;
  let elementsAttribute = [];

  this.client.api.elements('css selector', cssSelector, (res) => {
    elementsAttribute = res.value;

    let count = 0;
    elementsAttribute.forEach(async (el, i) => {
      this.client.api.elementIdAttribute(el.ELEMENT, attribute, ({ value }) => {
        elementsAttribute[i] = value;
        count += 1;
        if (count === elementsAttribute.length) {
          cb(elementsAttribute);
          self.emit('complete');
        }
      });
    });
  });

  return this;
};

module.exports = getElementsAttribute;
