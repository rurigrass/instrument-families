const InstrumentFamilies = require('./models/instrument_families.js');
const SelectFamily = require('./views/select_family.js');
const DisplayFamily = require('./views/display_family.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const selectInstrument = document.querySelector('select#instrument-families');
const familyDropdown = new SelectFamily(selectInstrument);
familyDropdown.bindEvents();

const InstrumentFamiliesDataSource = new InstrumentFamilies();
InstrumentFamiliesDataSource.bindEvents();

});
