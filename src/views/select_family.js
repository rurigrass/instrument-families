const PubSub = require('../helpers/pub_sub.js');

const SelectFamily = function(selectInstrument) {
  this.selectInstrument = selectInstrument;
};

SelectFamily.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments', (event) => {
    const allFamilies = event.detail;
    this.populate(allFamilies);
  })
};

SelectFamily.prototype.populate = function (familyData) {
  familyData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.selectInstrument.appendChild(option);
  })
};

module.exports = SelectFamily;
