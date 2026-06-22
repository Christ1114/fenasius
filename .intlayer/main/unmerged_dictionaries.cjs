const _2oWMVZRmOTdC4RKfimzf = require('../unmerged_dictionary/btn.json');
const _KgDVFi6lY5Xj9Dl5M1sF = require('../unmerged_dictionary/fenasius.json');
const _xgmiD0AROI9wQAEOxSnj = require('../unmerged_dictionary/footer.json');
const _cRtDVK3LMDdsYVJ2UoZI = require('../unmerged_dictionary/navbar.json');
const _VNnL0UOPyf8kXmwXmVAu = require('../unmerged_dictionary/page.json');
const _HCPkP4dCJZ6dh3CaqQhS = require('../unmerged_dictionary/subnavbar.json');

const dictionaries = {
  "btn": _2oWMVZRmOTdC4RKfimzf,
  "fenasius": _KgDVFi6lY5Xj9Dl5M1sF,
  "footer": _xgmiD0AROI9wQAEOxSnj,
  "navbar": _cRtDVK3LMDdsYVJ2UoZI,
  "page": _VNnL0UOPyf8kXmwXmVAu,
  "subnavbar": _HCPkP4dCJZ6dh3CaqQhS
};
const getUnmergedDictionaries = () => dictionaries;

module.exports.getUnmergedDictionaries = getUnmergedDictionaries;
module.exports = dictionaries;
