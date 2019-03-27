// it is a temporary fix since chrome mobile emulator does not work with client.click()
const util = require('util');
const events = require('events');

function clickEl() {
  events.EventEmitter.call(this);
}

util.inherits(clickEl, events.EventEmitter);

clickEl.prototype.command = function (cssSelector) {
  const self = this;

  this.client.api.element('css selector', cssSelector, (res) => {
    this.client.api.pause(100).then(() => {
      this.client.api.elementIdClick(res.value.ELEMENT).then(() => {
        self.emit('complete');
      });
    });
  });

  return this;
};

module.exports = clickEl;
