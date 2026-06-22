const _Xs6PTAWclrT9LbfVnMly = require('../dictionary/btn.json');
const _SvLv6NAvjjQ573NvUeBd = require('../dictionary/fenasius.json');
const _0dcZcPrY7jKV8WwDfyKY = require('../dictionary/footer.json');
const _YJ68zD1jBEIgpqvZtS7c = require('../dictionary/navbar.json');
const _dXVB2QdSAmzK3oktgVGb = require('../dictionary/page.json');
const _ebF9e2wI8e9lvMydeOgw = require('../dictionary/subnavbar.json');

const dictionaries = {
  "btn": _Xs6PTAWclrT9LbfVnMly,
  "fenasius": _SvLv6NAvjjQ573NvUeBd,
  "footer": _0dcZcPrY7jKV8WwDfyKY,
  "navbar": _YJ68zD1jBEIgpqvZtS7c,
  "page": _dXVB2QdSAmzK3oktgVGb,
  "subnavbar": _ebF9e2wI8e9lvMydeOgw
};
const getDictionaries = () => dictionaries;

module.exports.getDictionaries = getDictionaries;
module.exports = dictionaries;
