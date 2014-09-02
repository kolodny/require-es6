var oldRequire = require;

module.exports = function(pkg) {
  try {
    var meta = oldRequire(pkg + '/package.json');
    var mainEs6 = meta['main-es6'];
    if (mainEs6) {
      return oldRequire.call(this, pkg.replace(/\/$/, '') + '/' + mainEs6.replace(/^\//, ''));
    }
  } catch (e) {
    console.warn('there was some issue with ' + pkg);
  }
  return oldRequire.call(this, pkg);
};
